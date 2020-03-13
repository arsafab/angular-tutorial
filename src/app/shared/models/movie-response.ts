import { IMovie } from './movie';

export interface IMovieResponse {
  data: IMovie[];
  total: number;
  offset: number;
  limit: number;
}
