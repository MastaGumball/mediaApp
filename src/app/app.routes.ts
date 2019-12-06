import {MovieslistComponent} from './movieslist/movieslist.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {ActorOverviewComponent} from './actor-overview/actor-overview.component';
import {Routes} from '@angular/router';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';

export const MovieAppRoutes: Routes = [
  {
    path: '',
    component: MovieslistComponent
  },
    {
    path: 'movies',
    component: MovieslistComponent
    },
    {
        path: 'movies/add',
        component: MoviesAddComponent
    },
    {
        path: 'movies/:id',
        component: MovieDetailsComponent
    },
    {
        path: 'actors',
        component: ActorOverviewComponent,
        children: [
            {
                path: ':id',
                component: ActorDetailsComponent
            }]
    },


];
