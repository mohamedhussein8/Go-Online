import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAdminOrder } from '../Models/iadmin-order';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

  httpOptions

  constructor(private httpclient:HttpClient,private accservice:AccountService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json'
        Authorization: accservice.GetToken()
      })
    };
   }

   getAllOrders() : Observable<IAdminOrder[]>
   {
    //  console.log(this.accservice.GetToken());
     return this.httpclient.get<IAdminOrder[]>(`${environment.APIURL}/Order`,this.httpOptions);
   }

   deleteOrder(ordId:number) : Observable<IAdminOrder>
  {
    return this.httpclient.delete<IAdminOrder>(`${environment.APIURL}/Order/${ordId}`,this.httpOptions);
  }
}
