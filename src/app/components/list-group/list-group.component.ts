import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-group',
  template: `
    <div class="container list-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./list-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListGroupComponent {}
