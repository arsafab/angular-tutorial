import { Component, ChangeDetectionStrategy, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/api/movie.service';
import { IMovie } from 'src/app/shared/models';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit, AfterViewInit {
  public movie: IMovie;
  public recommendedList: IMovie[];

  @ViewChild(LoaderComponent) private readonly loaderComponent: LoaderComponent;
  private movies: IMovie[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly movieService: MovieService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(({ id: routerId }) => {
      this.movies = this.movieService.movies.value;
      this.movie = this.movies.find(({ id }) => id === Number(routerId));
    });
  }

  public ngAfterViewInit(): void {
    this.setRecommendedMovies();
  }

  private setRecommendedMovies(): void {
    this.recommendedList = this.movies.filter(({ genres }) => (
      !!genres.find(genre => this.movie.genres.includes(genre))
    )).slice(0, 9);

    this.loaderComponent.dataLoaded();
    this.changeDetector.detectChanges();
  }
}
