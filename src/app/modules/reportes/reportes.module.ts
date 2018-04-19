import { MaterialDesignModule } from './../../material-design/material-design.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { GraficasDirective } from './graficas.directive';
import { ReportesComponent } from './reportes.component';
import { EstadisticosComponent } from './estadisticos/estadisticos.component';
import { PruebaComponent } from './estadisticos/prueba/prueba.component';
import { ServiciosAtendidosComponent } from './estadisticos/servicios-atendidos/servicios-atendidos.component';
import { ClientesFrecuentesComponent } from './estadisticos/clientes-frecuentes/clientes-frecuentes.component';
import { SuscripcionComponent } from './estadisticos/suscripcion/suscripcion.component';
import { EstructuradosComponent } from './estructurados/estructurados.component';

@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: [PruebaComponent, GraficasDirective, ServiciosAtendidosComponent, ClientesFrecuentesComponent, ReportesComponent, EstadisticosComponent, SuscripcionComponent, EstructuradosComponent]
})
export class ReportesModule { }
