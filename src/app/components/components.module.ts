import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

const components = [];

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
