import {Component, OnInit, ViewChild} from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'media-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  @ViewChild('searchForm', null) frm: NgForm;

  foundMovies: Movie[];
  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchMovie(searchInput: NgForm) {
    console.log('view child form:', this.frm);
    this.movieService.lookupMovie(searchInput.value.title).subscribe(result => this.foundMovies = result);
  }

  addMovie(id: string) {
    this.movieService.addMovie(id).subscribe();
  }

}
