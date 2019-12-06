import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../movie.model';

@Component({
  selector: 'media-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() selected = new EventEmitter<Movie>();

  constructor() {
  }

  ngOnInit() {
  }

}
