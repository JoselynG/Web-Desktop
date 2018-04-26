import { GraficasDirective } from './../reportes/graficas.directive';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmpleadoComponent, CancelarComponent } from './dashboard-empleado/dashboard-empleado.component';
import { ReportesModule } from '../reportes/reportes.module';
import { ClFrecuentesComponent } from './dashboard-full/cl-frecuentes/cl-frecuentes.component';
import { CitasRecibidasComponent } from './dashboard-full/citas-recibidas/citas-recibidas.component';
import { ServiciosAtendidosComponent } from './dashboard-full/servicios-atendidos/servicios-atendidos.component';


@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReportesModule,
    
  ],
  entryComponents:[
    CancelarComponent
  ],
  declarations: [
    DashboardFullComponent,
    DashboardEmpleadoComponent,
    ClFrecuentesComponent,
    CancelarComponent,
    CitasRecibidasComponent,
    ServiciosAtendidosComponent,
  ]
})
export class InicioModule { }
