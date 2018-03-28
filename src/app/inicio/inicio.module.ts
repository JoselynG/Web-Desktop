import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { MaterialDesignModule } from './../material-design/material-design.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialDesignModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent, InicioComponent]
})
export class InicioModule { }
