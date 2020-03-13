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
  public loading: boolean = true;

  constructor(
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public dataLoaded(): void {
    of(null)
      .pipe(delay(1000))
      .subscribe(() => {
        this.loading = false;
        this.changeDetector.detectChanges();
      });
  }
}
