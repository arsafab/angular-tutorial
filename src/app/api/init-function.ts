import { IMovieResponse } from './../shared/models/movie-response';
import { MovieService } from './movie.service';

export function initApp(movieService: MovieService) {
  return (): Promise<IMovieResponse> => movieService.getAll();
}
