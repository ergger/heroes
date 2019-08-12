import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() selectionHero: EventEmitter<number>;

  constructor(private _router: Router) {
    this.selectionHero = new EventEmitter();
  }

  ngOnInit() {
  }

  getHeroe() {
    this._router.navigate(['/heroe', this.index]);
    //this.selectionHero.emit(this.index);
  }


}
