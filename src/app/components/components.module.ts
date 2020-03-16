import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LoaderComponent } from './loader/loader.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  ButtonComponent,
  InputComponent,
  ButtonGroupComponent,
  ListGroupComponent,
  FooterComponent,
  PaginationComponent,
  LoaderComponent,
  MovieItemComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule {}
