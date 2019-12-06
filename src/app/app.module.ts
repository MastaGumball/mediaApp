import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import {RouterModule} from '@angular/router';
import {MovieAppRoutes} from './app.routes';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ActorOverviewComponent } from './actor-overview/actor-overview.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component'
import {HttpClientModule} from '@angular/common/http';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import {FormsModule} from '@angular/forms';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MovieslistComponent,
    MovieDetailsComponent,
    ActorOverviewComponent,
    ActorListComponent,
    ActorDetailsComponent,
    MoviesAddComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MovieAppRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
