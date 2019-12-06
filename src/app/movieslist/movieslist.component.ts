import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie.model';
import {Router} from '@angular/router';

@Component({
  selector: 'media-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  movieList: Movie[];

  constructor(private movieService: MoviesService, private router: Router) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(Movies => this.movieList = Movies);
  }

  goToDetail(id: string) {
    this.router.navigate(['/movies', id]);
  }

}
