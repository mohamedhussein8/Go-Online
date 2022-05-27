import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategoryAdmin } from '../Models/icategory-admin';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdminService {
  httpOptions
  constructor(private httpClient: HttpClient,accountService:AccountService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
        Authorization: accountService.GetToken()
      })
    };
  }
  getAllCategory(): Observable<ICategoryAdmin[]> {
    
    return this.httpClient.get<ICategoryAdmin[]>(`${environment.APIURL}/Category`)

  }

  getCategoryByID(prdID: number): Observable<ICategoryAdmin> {
    return this.httpClient.get<ICategoryAdmin>(`${environment.APIURL}/Category/${prdID}`)

  }
  
  addCategory(newPrd:any) {
    return this.httpClient.post<any> (`${environment.APIURL}/Category`,newPrd,this.httpOptions)
 }
  updateCategory(prdID: number, UpdatedPrd: any) {
    return this.httpClient.put<any>(`${environment.APIURL}/Category/${prdID}`,UpdatedPrd,this.httpOptions )

  }

  deleteCategory(prdID: number):Observable<ICategoryAdmin> {
    return this.httpClient.delete<ICategoryAdmin>(`${environment.APIURL}/Category/${prdID}`,this.httpOptions)

  }
}
