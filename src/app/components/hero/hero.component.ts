import { Component, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent  {

  _heroe: Heroe ;

  constructor(private _activateRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

    this._activateRoute.params.subscribe(params => {
      //console.log(params['id']);
      this._heroe = this._heroesService.getHeroe(params['id']);
      console.log(this._heroe);
    });
  }
}
