import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnChanges {
  public currentPage: number = 0;
  public totalPageNumber: number;

  @Input() private readonly totalMoviesNumber: number;

  public ngOnChanges(): void {
    if (this.totalMoviesNumber) {
      this.setCurrentPage();
    }
  }

  private setCurrentPage(): void {
    this.totalPageNumber = Math.ceil(this.totalMoviesNumber / 9);
  }
}
