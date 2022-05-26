import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeliveryStatus } from '../Enums/DeliveryStatus';
import { PaymentMethod } from '../Enums/PaymentMethod';
import { IOrder } from '../Models/IOrder';
import { BascketManagementService } from './bascket-management.service';
import { BehaviorSubject, catchError, from, map, Observable, retry, throwError } from 'rxjs';
import { ErrorHanlingManagementService } from './error-hanling-management.service';
import { checkOutVM } from '../ViewModels/checkOutVM';


@Injectable({
  providedIn: 'root'
})
export class OrdersManagementService {

  constructor(private basketService:BascketManagementService, private httpClient:HttpClient, private errorHandlingservice: ErrorHanlingManagementService
    ) {
  }
  getOrderById(id:number):Observable<IOrder>{
    return this.httpClient.get<IOrder>(`${environment.APIURL}/Orders/${id}`)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }

  getOrders(userEmail:string):Observable<IOrder[]>{
    return this.httpClient.get<IOrder[]>(`${environment.APIURL}/Orders/${userEmail}`)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
  }
  placeOrder(userdata:checkOutVM){
    return this.httpClient.post(`${environment.APIURL}/Orders`,checkOutVM)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );

  }
}
