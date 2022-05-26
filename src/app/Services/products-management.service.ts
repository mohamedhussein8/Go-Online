import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';
import { GenericApihandlerService } from './generic-apihandler.service';
import { BehaviorSubject, catchError, from, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorHanlingManagementService } from './error-hanling-management.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService {
  constructor(private httpClient: HttpClient,
    private errorHandlingservice: ErrorHanlingManagementService) {
  }
  getProductById(id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.APIURL}/Products/${id}`)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }
  getAll():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }

  getFirstFourItems(){
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
  }
  getFirstEightItems(){
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
  }
}
