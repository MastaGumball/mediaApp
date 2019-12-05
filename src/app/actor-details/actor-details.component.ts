import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActorService } from '../actor.service';
import { Actors } from '../actors.model';

@Component({
  selector: 'media-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  private actor:Actors;

  constructor(private activatedRoute:ActivatedRoute, private actorService: ActorService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
      const id= parseInt( params['id']);
      this.actor=this.actorService.getOneActor(id);
      console.log(id);
    })
  }

}
