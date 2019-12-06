import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.url + '/' + id);
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  lookupMovie(title: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url + '/search', {
      params: new HttpParams().set('title', title)
    });
  }

  addMovie(onlineId: string): Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, {
      apiId: onlineId,
    });

  }
}
