import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'media-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  movieList: Movie[];
  constructor(private movieService:MoviesService){}

  ngOnInit(){
    this.movieService.getMovies().subscribe(Movies => this.movieList=Movies);
  }
  

}
