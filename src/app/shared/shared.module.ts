import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { RoutingModule } from '../routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    OrderByPipe
  ],
  exports: [
    RoutingModule,
    CommonModule,
    OrderByPipe
  ]
})
export class SharedModule {}
