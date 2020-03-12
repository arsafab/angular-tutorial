import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

const components = [
  HeaderComponent,
  ButtonComponent,
  InputComponent,
  ButtonGroupComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule {}
