import { IMovie } from './../../shared/models/movie';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MovieService } from './../../api/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public readonly buttons: { [key: string]: string } = {
    search: 'search',
    title: 'title',
    genre: 'genre',
    releaseDate: 'release date',
    rating: 'rating'
  };
  public movies: IMovie[];

  constructor(
    public readonly movieService: MovieService
  ) {}
}
