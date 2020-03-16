import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { AppComponent } from './root/app.component';
import { ComponentsModule } from './components/components.module';

import { MovieService } from './api/movie.service';
import { IMovieResponse } from './shared/models';

import { HomeComponent } from './containers/home/home.component';
import { MovieComponent } from './containers/movie/movie.component';


function initApp(movieService: MovieService) {
  return (): Promise<IMovieResponse> => movieService.getAll();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
