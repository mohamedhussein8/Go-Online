import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/ICategory';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {
  httpOptions
  constructor(private httpClient: HttpClient, private accountService:AccountService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        ,Authorization: accountService.GetToken()
      })
    };
   }
  getAllCategory(): Observable<ICategory[]> {

    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/Category`,this.httpOptions )

  }

  getCategoryByID(prdID: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${environment.APIURL}/Category/${prdID}`,this.httpOptions)

  }
}
