import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  constructor(private httpClient: HttpClient) { }
  getAllCategory(): Observable<ICategory[]> {

    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/Category`)

  }
  getCategoryByID(prdID: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${environment.APIURL}/Category/${prdID}`)

  }
}
