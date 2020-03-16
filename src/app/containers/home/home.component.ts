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
import { Sorting } from '../../../app/shared/constants';
import { OrderByPipe } from 'src/app/shared/pipes/orderBy.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ OrderByPipe ]
})
export class HomeComponent implements AfterViewInit {
  public sortingValues = Sorting;
  public currentSorting: Sorting = Sorting.Rating;
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
    private readonly changeDetector: ChangeDetectorRef,
    private orderByPipe: OrderByPipe
  ) {}

  public ngAfterViewInit(): void {
    this.movieService.movies
      .subscribe((data: IMovie[]) => {
        if (data) {
          this.sortBy(data);
          this.moviesList = this.movies.slice(0, 9);
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

  public sortBy(data: IMovie[], prop: Sorting = Sorting.Rating): void {
    this.loaderComponent.loading();
    this.movies = this.orderByPipe.transform(data, prop);
    this.currentSorting = prop;
    this.loaderComponent.dataLoaded();
  }
}
