import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';
import { ErrorHanlingManagementService } from './error-hanling-management.service';

@Injectable({
  providedIn: 'root'
})
export class GenericApihandlerService {
  httpOptions
  constructor(private httpClient: HttpClient,
    private errorHandlingservice: ErrorHanlingManagementService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,Authorization: 'my-auth-token'
      })
    };

  }
  private setHeaders(key: string, value: string) {
    this.httpOptions.headers.set(key, value);
  }
  getAll(APIRoute: string): Observable<APIResponseVM> {
    return this.httpClient.get<APIResponseVM>(`${environment.APIURL}/${APIRoute}/`,this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );

  }
  getByID(APIRoute: string, id: number): Observable<APIResponseVM> {
    return this.httpClient.get<APIResponseVM>(`${environment.APIURL}/${APIRoute}/${id}`,this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }
  post(APIRoute: string, object: APIResponseVM): Observable<APIResponseVM> {
    return this.httpClient.post<APIResponseVM>(`${environment.APIURL}/${APIRoute}/`, object,this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }
  put(APIRoute: string,  id: number, object: APIResponseVM): Observable<APIResponseVM> {
    return this.httpClient.put<APIResponseVM>(`${environment.APIURL}/${APIRoute}/${id}`, object, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }
  delete(APIRoute: string, id: number): Observable<APIResponseVM> {
    return this.httpClient.delete<APIResponseVM>(`${environment.APIURL}/${APIRoute}/${id}`, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandlingservice.handleError)
      );
  }
}
