import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IproductAdmin } from '../Models/iproduct-admin';

@Injectable({
  providedIn: 'root'
})
export class ProductsAdminService {

  constructor(private httpClient: HttpClient) { }
  getAllProducts(): Observable<IproductAdmin[]> {

    return this.httpClient.get<IproductAdmin[]>(`${environment.APIURL}/Products`)

  }
  getProductsByCatID(catID: number): Observable<IproductAdmin[]> {
    return this.httpClient.get<IproductAdmin[]>(`${environment.APIURL}/Products?categoryID=${catID}`)

  }
  getProductByID(prdID: number): Observable<IproductAdmin> {
    return this.httpClient.get<IproductAdmin>(`${environment.APIURL}/Products/${prdID}`)

  }

  addProduct(newPrd:any) {
    return this.httpClient.post<any> (`${environment.APIURL}/Products`,newPrd)
 }
  updateProduct(prdID: number, UpdatedPrd: any) {
    return this.httpClient.put<any>(`${environment.APIURL}/Products/${prdID}`,UpdatedPrd)

  }

  deleteProduct(prdID: number):Observable<IproductAdmin> {
    return this.httpClient.delete<IproductAdmin>(`${environment.APIURL}/Products/${prdID}`)

  }
}
