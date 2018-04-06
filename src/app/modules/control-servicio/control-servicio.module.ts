import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlServicioRoutingModule } from './control-servicio-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { RegistrarDetalleComponent } from './registrar-detalle/registrar-detalle.component';
import { IncidenciaServicioComponent } from './registrar-detalle/incidencia-servicio/incidencia-servicio.component';


@NgModule({
  imports: [
    CommonModule,
    ControlServicioRoutingModule,
    MaterialDesignModule
    
  ],
  declarations: [TimelineComponent, RegistrarDetalleComponent, IncidenciaServicioComponent]
})
export class ControlServicioModule { }
