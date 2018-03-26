import { MaterialDesignModule } from './material-design/material-design.module';
import { InicioModule } from './inicio/inicio.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    InicioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
