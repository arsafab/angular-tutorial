import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnChanges {
  @Output() public readonly emitCurrentPage = new EventEmitter<number>();
  public currentPage: number = 0;
  public totalPageNumber: number;

  @Input() private readonly totalMoviesNumber: number;

  public ngOnChanges(): void {
    if (this.totalMoviesNumber) {
      this.setCurrentPage();
    }
  }

  public onClick(page: number): void {
    this.currentPage = page;
    this.emitCurrentPage.next(this.currentPage);
  }

  private setCurrentPage(): void {
    this.totalPageNumber = Math.ceil(this.totalMoviesNumber / 9);
  }
}
