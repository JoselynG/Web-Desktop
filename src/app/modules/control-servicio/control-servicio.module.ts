import { FullCalendarModule } from 'ng-fullcalendar';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlServicioRoutingModule } from './control-servicio-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { RegistrarDetalleComponent } from './registrar-detalle/registrar-detalle.component';
import { IncidenciaServicioComponent } from './registrar-detalle/incidencia-servicio/incidencia-servicio.component';
import { AgendaComponent } from './agenda/agenda.component';



@NgModule({
  imports: [
    CommonModule,
    ControlServicioRoutingModule,
    MaterialDesignModule,
    FullCalendarModule
  ],
  declarations: [TimelineComponent, RegistrarDetalleComponent, IncidenciaServicioComponent, AgendaComponent]
})
export class ControlServicioModule { }
