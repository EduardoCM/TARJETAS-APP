import { Component, OnInit } from '@angular/core';
import { Tarjeta } from './tarjeta';
import { TARJETAS } from './tarjetas.json';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {


  tarjetas: Tarjeta[];

  constructor() { }

  ngOnInit(): void {
    this.tarjetas = TARJETAS;
  }

}
