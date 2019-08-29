import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, heroName: 'Man that is "definitely not" Made of Iron I swear', realName: 'Sony Tark'},
      {id: 11, heroName: 'Dr Nice', realName: 'Dr. Nick Nice'},
      {id: 12, heroName: 'Narco', realName: 'Nick Narco'},
      {id: 13, heroName: 'Pidgeon Ears', realName: 'Blint Carton'},
      {id: 14, heroName: 'Grey Happily Married Wife', realName: 'Ratasho Nominov'},
      {id: 15, heroName: 'Bulk', realName: 'Dr. Spruce Spanner'},
      {id: 16, heroName: 'Private Kentucky', realName: 'Reve Stogers'},
      {id: 17, heroName: 'God of static with a Massive Hammer', realName: 'Phor'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}