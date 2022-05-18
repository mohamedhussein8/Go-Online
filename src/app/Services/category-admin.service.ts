import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategoryAdmin } from '../Models/icategory-admin';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdminService {

  constructor(private httpClient: HttpClient) { }
  getAllCategory(): Observable<ICategoryAdmin[]> {
    
    return this.httpClient.get<ICategoryAdmin[]>(`${environment.APIURL}/Category`)

  }

  getCategoryByID(prdID: number): Observable<ICategoryAdmin> {
    return this.httpClient.get<ICategoryAdmin>(`${environment.APIURL}/Category/${prdID}`)

  }
  
  addCategory(newPrd:any) {
    return this.httpClient.post<any> (`${environment.APIURL}/Category`,newPrd)
 }
  updateCategory(prdID: number, UpdatedPrd: any) {
    return this.httpClient.put<any>(`${environment.APIURL}/Category/${prdID}`,UpdatedPrd)

  }

  deleteCategory(prdID: number):Observable<ICategoryAdmin> {
    return this.httpClient.delete<ICategoryAdmin>(`${environment.APIURL}/Category/${prdID}`)

  }
}
