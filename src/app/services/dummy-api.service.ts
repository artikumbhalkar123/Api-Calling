import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http: HttpClient) { }

  getDummyData(num:number):Observable<any>{
    const url=`https://jsonplaceholder.typicode.com/posts/${num}`;
    return this.http.get(url).pipe(
      //error handling
      catchError(this.handleError)
    )
  }
  private handleError (error:HttpErrorResponse):Observable<any>{
    alert('Url not Found');
    return throwError(error.message)
  }
  
}
