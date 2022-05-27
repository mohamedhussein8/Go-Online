import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, Observer, retry, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBasket } from '../Models/IBasket';
import { IBasketItem } from '../Models/IBasketItem';
import { AccountService } from './account.service';
import { ErrorHanlingManagementService } from './error-hanling-management.service';


@Injectable({
  providedIn: 'root'
})
export class BascketManagementService {
  httpOptions;
  basket!: IBasket;
  basketObject:Subject<IBasket>=new Subject<IBasket>();

  constructor(private httpClient: HttpClient, private errorHandlingservice: ErrorHanlingManagementService,
    private accountService: AccountService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        , Authorization: this.accountService.IsUserLogged() ? accountService.GetToken() : ""
      })
    };

    if(accountService.IsUserLogged()){
      this.getBascketById().subscribe();
    }
  }

  getBascketById(): Observable<IBasket> {
    this.getOptions()

    var returbObject = this.httpClient.get<IBasket>(`${environment.APIURL}/Basket`, this.httpOptions)
    returbObject.subscribe(data => {
      this.basket = data;
      this.basketObject.next(data);
     })
    return returbObject;
  }


  AddToCart(newItem: IBasketItem): Observable<IBasket> {
    this.getOptions();
    var returbObject = this.httpClient.post<IBasket>(`${environment.APIURL}/Basket`, JSON.stringify(newItem), this.httpOptions)
      .pipe(
        retry(3)
      );
    returbObject.subscribe(data => {
      this.basket = data;
      this.basketObject.next(data);

    })
    return returbObject;
  }


  deicreamentItem(id: string): Observable<IBasket> {
    this.getOptions()
    var item = this.basket.items?.find(prd => prd.id == id)!;
    var returnObject;
    if (item.quantity > 1) {
      item.quantity -= 1;
      returnObject= this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, item, this.httpOptions)
        .pipe(
          retry(3),
          catchError(this.errorHandlingservice.handleError)
        );
    }
    else
        returnObject= this.RemoveItemById(id);
    returnObject.subscribe(data=>{
      this.basket=data;
      this.basketObject.next(data);

    });
    return returnObject;

  }
  increamentItem(id: string): Observable<IBasket> {
    this.getOptions()
    var item = this.basket.items?.find(prd => prd.id == id)!;
    if (item.quantity < item.numberInStock) {
      item.quantity += 1;
    }
    var returnObject= this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, item, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
      returnObject.subscribe(data=>{
        this.basket=data;
        this.basketObject.next(data);

         });
    return returnObject;

  }
  changeItemQuantity(id: string, quantity: number): Observable<IBasket> {
    this.getOptions()
    var item = this.basket.items?.find(prd => prd.id == id)!;

    var returnObject;
    if (quantity == 0)
    returnObject= this.RemoveItemById(id);
    else if (quantity <= item.numberInStock) {
      item.quantity = quantity;
      returnObject= this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, item, this.httpOptions)
        .pipe(
          retry(3),
          catchError(this.errorHandlingservice.handleError)
        );
    }
    else {
      item.quantity = item.numberInStock;
      returnObject= this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, this.basket, this.httpOptions)
        .pipe(
          retry(3),
          catchError(this.errorHandlingservice.handleError)
        );
    }
    returnObject.subscribe(data=>{this.basket=data;
      this.basketObject.next(data);

    });
    return returnObject;
  }



  RemoveItemById(id: string) {
    this.getOptions();
    var returnObject= this.httpClient.delete<IBasket>(`${environment.APIURL}/Basket/${id}`, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
      returnObject.subscribe(data=>{this.basket=data;
        this.basketObject.next(data);

      });
      return returnObject;
  }


  getOptions(): any {
    return this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        , Authorization: this.accountService.IsUserLogged() ? this.accountService.GetToken() : ""
      })
    };
  }
}
