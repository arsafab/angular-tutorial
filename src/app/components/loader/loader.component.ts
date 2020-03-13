import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  public isLoading: boolean = true;

  constructor(
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public dataLoaded(): void {
    of(null)
      .pipe(delay(1000))
      .subscribe(() => {
        this.isLoading = false;
        this.changeDetector.detectChanges();
      });
  }

  public loading(): void {
    this.isLoading = true;
    this.changeDetector.detectChanges();
  }
}
