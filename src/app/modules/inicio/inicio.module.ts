import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmpleadoComponent } from './dashboard-empleado/dashboard-empleado.component';
import { ReportesModule } from '../reportes/reportes.module';
import { ClFrecuentesComponent } from './dashboard-full/cl-frecuentes/cl-frecuentes.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReportesModule
    
  ],
  declarations: [DashboardFullComponent, DashboardEmpleadoComponent, ClFrecuentesComponent]
})
export class InicioModule { }
