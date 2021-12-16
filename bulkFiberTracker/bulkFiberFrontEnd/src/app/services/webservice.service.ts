import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  private based_url = 'http://localhost:8000/fiber/';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "application/json",
     //  "Authorization": ''  // "JWT "+this.getToken() 
    })
  };
  
  constructor(
      private httpClient: HttpClient,
    ) {
  }

  create(data, endPoint): Observable<any> {//console.log(JSON.stringify(data))
    return this.httpClient.post<any>(this.based_url + endPoint, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(err => { console.log(err); return [err]; })
        // catchError(err=>{console.log('create error',err); return [err];})
      )
  }

  //get any object by ID 
  getById(id, endPoint): Observable<any> {
    return this.httpClient.get<any>(this.based_url + endPoint + id, this.httpOptions)
      .pipe(
        catchError(err => { console.log(err); return throwError(err); })
      )
  }
  //get all any object
  getAll(endPoint): Observable<any> {
    return this.httpClient.get<any[]>(this.based_url + endPoint, this.httpOptions)
      .pipe(
        catchError(err => { return ([err]); })
      )
  }

  //update any object requested
  update(endPoint, id, data): Observable<any> {
    return this.httpClient.put<any>(this.based_url + endPoint + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(err => { console.log(err); return throwError(err); })
      )
  }
  //deleting any object requested
  delete(endPoint, id) {
    return this.httpClient.delete<any>(this.based_url + endPoint + id, this.httpOptions)
      .pipe(
        catchError(err => { console.log(err); return [err]; })
      )
  }

  //deleting any object requested
  // deleteAll(endPoint, data) {
  //   return this.httpClient.delete<any>(this.based_url + endPoint + data, this.httpOptions)
  //     .pipe(
  //       catchError(err => { console.log(err); return [err]; })
  //     )
  // }
}
