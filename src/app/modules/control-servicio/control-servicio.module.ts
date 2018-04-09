import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlServicioRoutingModule } from './control-servicio-routing.module';
import { TimelineComponent, CancelarCitaComponent, IncidenciaCitaComponent} from './timeline/timeline.component';
import { RegistrarDetalleComponent, IncidenciaServicioComponent} from './registrar-detalle/registrar-detalle.component';





@NgModule({
  imports: [
    CommonModule,
    ControlServicioRoutingModule,
    MaterialDesignModule,
  ],
  entryComponents: [
    CancelarCitaComponent,
    IncidenciaServicioComponent,
    IncidenciaCitaComponent
  ],
  declarations: [TimelineComponent, RegistrarDetalleComponent, IncidenciaServicioComponent, CancelarCitaComponent, IncidenciaCitaComponent],
})
export class ControlServicioModule { }
