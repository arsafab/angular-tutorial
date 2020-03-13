import { IMovieResponse } from './../shared/models/movie-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IMovie } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public readonly movies: BehaviorSubject<IMovie[]> = new BehaviorSubject([]);
  public readonly totalNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  private readonly baseUrl: string = 'http://reactjs-cdp.herokuapp.com';
  private limit: number = 9;

  constructor(
    private http: HttpClient
  ) {}

  public getAll(): Promise<IMovieResponse> {
    const url = `${this.baseUrl}/movies?limit=${this.limit}`;

    return this.http
      .get(url)
      .pipe(
        tap((response: IMovieResponse) => {
          this.movies.next(response.data);
          this.totalNumber.next(response.total);
        }),
        catchError((error: Error) => this.wrapError)
      )
      .toPromise();
  }

  private wrapError(error: Error): Promise<string> {
    console.error(error);
    const errorMessage = `${error.name} - ${error.message}`;

    return Promise.resolve(errorMessage);
  }

}
