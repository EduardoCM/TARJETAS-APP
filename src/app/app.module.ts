import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
