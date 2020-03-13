import { IMovie } from './../../shared/models/movie';
import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { MovieService } from './../../api/movie.service';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit{
  public readonly buttons: { [key: string]: string } = {
    search: 'search',
    title: 'title',
    genre: 'genre',
    releaseDate: 'release date',
    rating: 'rating'
  };
  public movies: IMovie[];

  @ViewChild(LoaderComponent) private readonly loaderComponent: LoaderComponent;


  constructor(
    public readonly movieService: MovieService
  ) {}

  public ngAfterViewInit(): void {
    this.movieService.movies
      .subscribe((data: IMovie[]) => {
        if (data) {
          this.loaderComponent.dataLoaded();
        }
      })
  }
}
