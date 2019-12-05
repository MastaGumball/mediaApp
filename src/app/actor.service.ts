import { Injectable } from '@angular/core';
import { Actors } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getOneActor(id:number):Actors{
    let actor:Actors = this.actors.find(actor=>actor.id===id);
    return actor;
  }

  getAllActors():Actors[]{
    return this.actors;
  }

  actors: Actors[] = [
    {
      id:1,
      name: 'Jack Nicholson',
      desc: `Jack Nicholson, an American actor, producer, director and screenwriter, is
      a three-time Academy Award winner and twelve-time nominee.`,
      imagePath: 'https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY209_CR5,0,140,209_AL_.jpg'
    },
    {
      id:2,
      name: 'Nicolas Cage',
      desc: `Nicolas Cage was born Nicolas Kim Coppola in Long Beach, California, the son
      of comparative literature professor August Coppola (whose brother is director Francis
      Ford Coppola).`,
      imagePath: 'https://m.media-amazon.com/images/M/MV5BMTUzMDM4Nzk2MV5BMl5BanBnXkFtZTcwNTcwNjExOQ@@._V1_UY317_CR1,0,214,317_AL_.jpg'
    },
    {
      id:3,
      name: 'Milla Jovovich',
      desc: `Milla Jovovich is an Ukrainian-born actress, supermodel, fashion designer,
      singer and public figure, who was on the cover of more than a hundred magazines,
      and starred in such films as Le cinquième élément (1997), Ultraviolet (2006), and
      the Resident Evil (2002) franchise.`,
      imagePath: 'https://m.media-amazon.com/images/M/MV5BNzA1Nzc4NjYwNV5BMl5BanBnXkFtZTcwNjA2NjY1Mg@@._V1_UY209_CR12,0,140,209_AL_.jpg'
    }
  ];
}
