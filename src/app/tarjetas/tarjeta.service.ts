import { Injectable } from '@angular/core';
import { Tarjeta } from './tarjeta';
import { TARJETAS } from './tarjetas.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor() { }


  getTarjetas(): Observable<Tarjeta[]>{
    return of(TARJETAS);
  }
}
