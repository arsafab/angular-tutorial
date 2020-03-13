import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { AppComponent } from './root/app.component';
import { ComponentsModule } from './components/components.module';
import { MovieService } from './api/movie.service';
import { initApp } from './api/init-function';

import { HomeComponent } from './containers/home/home.component';
import { MovieItemComponent } from './containers/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ MovieService ],
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
