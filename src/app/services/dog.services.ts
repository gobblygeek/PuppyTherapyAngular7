import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Dog, Breed } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDog(id): Observable<Dog[]> {
    let dogUrl = "https://api.thedogapi.com/v1/images/search?size=med"
    if (id !== 'all') dogUrl = dogUrl + "&breed_id=" + id;
    return this.http.get<Dog[]>(dogUrl)
      .pipe(
        catchError(this.handleError('getDog', []))
      );
  }
  getCategories(): Observable<Breed[]> {
    let categoryURL = "https://api.thedogapi.com/v1/breeds"
    return this.http.get<Breed[]>(categoryURL)
      .pipe(
        catchError(this.handleError('getCategories', []))
      )
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}