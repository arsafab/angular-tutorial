import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { MovieService } from './../../api/movie.service';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { IMovie } from './../../shared/models/movie';

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
  public moviesList: IMovie[] = [];

  @ViewChild(LoaderComponent) private readonly loaderComponent: LoaderComponent;
  private movies: IMovie[] = [];

  constructor(
    public readonly movieService: MovieService,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public ngAfterViewInit(): void {
    this.movieService.movies
      .subscribe((data: IMovie[]) => {
        if (data) {
          this.movies = data;
          this.moviesList = this.movies.slice(0, 9);
          this.loaderComponent.dataLoaded();
          this.changeDetector.detectChanges();
        }
      });
  }

  public getNextPage(page: number): void {
    const offset = page * 9;

    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    this.loaderComponent.loading();
    this.moviesList = this.movies.slice(offset, offset + 9);
    this.loaderComponent.dataLoaded();
  }
}
