import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';

@Component({
  selector: 'media-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  foundMovies: Movie[];
  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchMovie(searchInput: string) {
    this.movieService.lookupMovie(searchInput).subscribe(result => this.foundMovies = result);
  }

  addMovie(id: string) {
    this.movieService.addMovie(id).subscribe();
  }

}
