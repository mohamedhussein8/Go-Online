import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, from, map, Observable, Observer, retry } from 'rxjs';
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
  basket!:IBasket;

  constructor(private httpClient:HttpClient, private errorHandlingservice: ErrorHanlingManagementService,private accountService: AccountService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        ,Authorization: accountService.GetToken()
      })
    };
    if(this.accountService.IsUserLogged()){
     this.getBascketById().subscribe(data =>{
      this.basket=data;
    })
  }


  }

  getBascketById():Observable<IBasket>{
    return this.httpClient.get<IBasket>(`${environment.APIURL}/Basket`, this.httpOptions)
    .pipe(
      retry(3)
//      catchError(this.errorHandlingservice.handleError)
    );
  }


  AddToCart(newItem:IBasketItem):Observable<IBasket>{
    return this.httpClient.post<IBasket>(`${environment.APIURL}/Basket`,JSON.stringify(newItem), this.httpOptions)
    .pipe(
      retry(3)
    );
  }

  deicreamentItem(id:string):Observable<IBasket>{
     var item =this.basket.items?.find(prd=> prd.id==id)!;
     if(item.quantity>1){
      item.quantity -=1;
      return this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, item, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
     }
     else
      return this.RemoveItemById(id);

  }
  increamentItem(id:string) :Observable<IBasket>{
    var item =this.basket.items?.find(prd=> prd.id==id)!;
    if(item.quantity<item.numberInStock){
      item.quantity +=1;
    }
    return this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`,  item, this.httpOptions)
     .pipe(
       retry(3),
       catchError(this.errorHandlingservice.handleError)
     );

  }
  changeItemQuantity(id:string, quantity:number):Observable<IBasket>{
     var item =this.basket.items?.find(prd=> prd.id==id)!;
    if(quantity==0)
      return this.RemoveItemById(id);
    else if(quantity<=item.numberInStock){
      item.quantity = quantity;
      return this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, item, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );


     }
     else{
       item.quantity=item.numberInStock;
       return this.httpClient.put<IBasket>(`${environment.APIURL}/Basket/${id}`, this.basket, this.httpOptions)
       .pipe(
         retry(3),
         catchError(this.errorHandlingservice.handleError)
       );


     }
    }


  checkAvalibality(id:number){
    // var item =this.Basket.Items?.find(prd=> prd.Product.id==id)!;
    // if(item.ProductQuantity>item.Product.numInStock)
    // item.ProductQuantity=item.Product.numInStock;
  }
  RemoveItemById(id:string){
    return this.httpClient.delete<IBasket>(`${environment.APIURL}/Basket/${id}`, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
   // this.Basket.TotalPrice-=item.TotalPrice;
  }
  clearBasket(){
  }

}
