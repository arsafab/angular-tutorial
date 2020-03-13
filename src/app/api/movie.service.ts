import { IMovieResponse } from './../shared/models/movie-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IMovie } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public readonly movies: BehaviorSubject<IMovie[]> = new BehaviorSubject([]);
  private readonly baseUrl: string = 'http://reactjs-cdp.herokuapp.com';
  private limit: number = 80;

  constructor(
    private http: HttpClient
  ) {}

  public getAll(): Promise<IMovieResponse> {
    const url = `${this.baseUrl}/movies?limit=${this.limit}`;

    return this.http
      .get(url)
      .pipe(
        tap((response: IMovieResponse) => this.movies.next(response.data)),
        catchError((error: Error) => this.wrapError)
      )
      .toPromise();
  }

  public getById(id: number): Observable<object | IMovie> {
    const url = `${this.baseUrl}/movies/${id}`;

    return this.http
      .get(url)
        .pipe(
          catchError((error: Error) => this.wrapError)
        );
  }

  private wrapError(error: Error): Promise<string> {
    console.error(error);
    const errorMessage = `${error.name} - ${error.message}`;

    return Promise.resolve(errorMessage);
  }

}
