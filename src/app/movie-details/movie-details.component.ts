import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';


@Component({
  selector: 'media-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movie:Movie;

  constructor(private route:ActivatedRoute, private movieService:MoviesService) { }

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    return this.movieService.getMovie(id).subscribe( Movie => this.movie=Movie);
  }

}
