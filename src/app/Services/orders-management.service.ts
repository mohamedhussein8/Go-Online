import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeliveryStatus } from '../Enums/DeliveryStatus';
import { PaymentMethod } from '../Enums/PaymentMethod';
import { IOrder } from '../Models/IOrder';
import { BascketManagementService } from './bascket-management.service';
import { BehaviorSubject, catchError, from, map, Observable, Observer, retry, throwError } from 'rxjs';
import { ErrorHanlingManagementService } from './error-hanling-management.service';
import { checkOutVM } from '../ViewModels/checkOutVM';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersManagementService {
  httpOptions
  constructor(private basketService:BascketManagementService, private httpClient:HttpClient, private errorHandlingservice: ErrorHanlingManagementService, private accountService:AccountService
    ) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          ,Authorization: accountService.GetToken()
        })
      };
  }
  getOrderById(id:number):Observable<IOrder>{
    return this.httpClient.get<IOrder>(`${environment.APIURL}/Order/${id}`,this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }

  getOrders():Observable<IOrder[]>{
    var userEmail:string =this.accountService.GetUser().email;
    return this.httpClient.get<IOrder[]>(`${environment.APIURL}/Order/${userEmail}`,this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
  }
  placeOrder(userdata:checkOutVM):Observable<IOrder>{
    return this.httpClient.post<IOrder>(`${environment.APIURL}/Order`,JSON.stringify(userdata),this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
  }
}
