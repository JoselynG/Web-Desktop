import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmpleadoComponent } from './dashboard-empleado/dashboard-empleado.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  declarations: [DashboardFullComponent, DashboardEmpleadoComponent]
})
export class InicioModule { }
