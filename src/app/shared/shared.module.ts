import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/orderBy.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe
  ],
  exports: [
    CommonModule,
    OrderByPipe
  ]
})
export class SharedModule {}
