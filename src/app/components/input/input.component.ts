import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() public type: string = 'text';
  @Input() public label: string;
  @Input() public error: string;
  @Input() public isRequired: boolean;
}
