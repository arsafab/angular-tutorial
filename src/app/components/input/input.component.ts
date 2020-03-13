import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() public readonly type: string = 'text';
  @Input() public readonly label: string;
  @Input() public readonly error: string;
  @Input() public readonly isRequired: boolean;
}
