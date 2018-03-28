import { MaterialDesignModule } from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { CargarEmpleadoComponent } from './cargar-empleado/cargar-empleado.component';

@NgModule({
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialDesignModule,
  ],
  declarations: [CargarEmpleadoComponent]
})
export class EmpleadoModule { }
