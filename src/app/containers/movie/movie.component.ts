import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/api/movie.service';
import { IMovie } from 'src/app/shared/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
  public movie: IMovie;

  constructor(
    private route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      const movies = this.movieService.movies.value;

      this.movie = movies.find(item => item.id === Number(id));

      console.log(this.movie)
    });
  }
}
