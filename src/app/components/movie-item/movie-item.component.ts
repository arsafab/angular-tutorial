import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IMovie } from '../../shared/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent {
  @Input() public readonly movie: IMovie;
}
