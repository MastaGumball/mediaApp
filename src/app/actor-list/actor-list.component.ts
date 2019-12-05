import { Component, OnInit } from '@angular/core';
import { Actors } from '../actors.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'media-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  private listOfActors:Actors[];
  constructor(private actorService:ActorService) { }

  ngOnInit() {
    this.listOfActors=this.actorService.getAllActors();
  }

}
