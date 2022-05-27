import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { catchError, from, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHanlingManagementService } from './error-hanling-management.service';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';
import { productPagingVM } from '../ViewModels/productPagingVM';
import { getPagingVM } from '../ViewModels/getPagingVM';


@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService {
  httpOptions
  constructor(private httpClient: HttpClient,
    private errorHandlingservice: ErrorHanlingManagementService, private accountService:AccountService) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          ,Authorization: accountService.GetToken()
        })
      };
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
  getPage(filter:productPagingVM):Observable<getPagingVM>{
    var filteration:string="";

    if( filter.CategoryName !=null && filter.CategoryName.trim() !='' )
      filteration =`CategoryName=${filter.CategoryName}`;

     if(filter.rate!=null ){
      if(filteration !="")
       filteration=`${filteration}&rate=${filter.rate}`;
      else
       filteration =`rate=${filter.rate}`;
    }

     if(filter.maxPrice!=undefined ){
      if(filteration !="")
       filteration =`${filteration}&maxPrice=${filter.maxPrice}`;
      else
       filteration =`maxPrice=${filter.maxPrice}`;
    }
     if(filter.miniPrice!=undefined){
      if(filteration !="")
      filteration =`${filteration}&miniPrice=${filter.miniPrice}`;
      else
      filteration =`miniPrice=${filter.miniPrice}`;
    }

    if(filteration!="") filteration+="&";

    return this.httpClient.get<getPagingVM>(`${environment.APIURL}/Products/PagedProducts?${filteration}PageNumber=${filter.PageNumber}&PageSize=${filter._pageSize}`, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandlingservice.handleError)
    );
    //https://localhost:7240/PagedProducts?CategoryName=Shoes&rate=0&PageNumber=1&PageSize=10&maxPrice=20&miniPrice=12
  }
  getCategoryCount( name:string): Observable<number> {

    return this.httpClient.get<number>(`${environment.APIURL}/Products/${name}/ProductsCount` )

  }

  editProductRate( prdId:number, newRate:number): Observable<IProduct> {
    console.log(newRate)
    //https://localhost:7240/api/Products/233/Rate?newRate=55'
    return this.httpClient.get<IProduct>(`${environment.APIURL}/Products/${prdId}/Rate?${newRate}`,this.httpOptions )

  }

}


