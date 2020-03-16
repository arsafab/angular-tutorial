import { IMovieResponse } from './../shared/models/movie-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IMovie } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public readonly movies: BehaviorSubject<IMovie[]> = new BehaviorSubject([]);
  private readonly baseUrl: string = 'https://reactjs-cdp.herokuapp.com';
  private limit: number = 80;

  constructor(
    private http: HttpClient
  ) {}

  public getAll(): Promise<IMovieResponse | string> {
    const url = `${this.baseUrl}/movies?limit=${this.limit}`;

    return this.http
      .get(url)
      .pipe(
        tap((response: IMovieResponse) => this.movies.next(response.data)),
        catchError(this.wrapError)
      )
      .toPromise();
  }

  public getById(id: number): Observable<string | IMovie | object> {
    const url = `${this.baseUrl}/movies/${id}`;

    return this.http
      .get(url)
        .pipe(
          catchError(this.wrapError)
        );
  }

  private wrapError(error: Error): Promise<string> {
    console.error(error);
    const errorMessage = `${error.name} - ${error.message}`;

    return Promise.resolve(errorMessage);
  }
}
