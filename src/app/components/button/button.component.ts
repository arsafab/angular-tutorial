import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public text: string;
  @Input() public isActive: boolean;
  @Input() public isDisabled: boolean;
  @Input() public isInverted: boolean;
}
