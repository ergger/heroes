import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-find-hero',
  templateUrl: './find-hero.component.html'
})
export class FindHeroComponent implements OnInit {

  _heroes: Heroe[];
  _consulta: string;

  constructor(private _activateRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
    
  }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      console.log(params['consulta']);
      this._heroes = this._heroesService.findHero(params['consulta']);
      console.log(this._heroes);
      this._consulta = params['consulta'];
    });
  }

}
