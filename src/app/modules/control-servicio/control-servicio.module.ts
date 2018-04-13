import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlServicioRoutingModule } from './control-servicio-routing.module';
import { TimelineComponent, CancelarCitaComponent, IncidenciaCitaComponent, ResponderSolicitudComponent, NuevaCitaComponent} from './timeline/timeline.component';
import { RegistrarDetalleComponent, IncidenciaServicioComponent} from './registrar-detalle/registrar-detalle.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';






@NgModule({
  imports: [
    CommonModule,
    ControlServicioRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents: [
    CancelarCitaComponent,
    IncidenciaServicioComponent,
    IncidenciaCitaComponent,
    ResponderSolicitudComponent,
    NuevaCitaComponent
  ],
  declarations: [TimelineComponent, RegistrarDetalleComponent, IncidenciaServicioComponent, CancelarCitaComponent, IncidenciaCitaComponent, ResponderSolicitudComponent, NuevaCitaComponent, DashboardComponent],
})
export class ControlServicioModule { }
