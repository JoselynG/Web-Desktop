import { CancelarCitaComponent, IncidenciaCitaComponent } from './citas/citas.component';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { SolicitudComponent, ResponderSolicitudComponent } from './solicitud/solicitud.component';
import { CitasComponent } from './citas/citas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ReclamosOrdenComponent } from './reclamos-orden/reclamos-orden.component';
import { FormsModule } from '@angular/forms';
import { RegistrarDetalleComponent, IncidenciaServicioComponent } from './registrar-detalle/registrar-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    CancelarCitaComponent,
    IncidenciaCitaComponent,
    IncidenciaServicioComponent,
    ResponderSolicitudComponent
  ],
  declarations: [SolicitudComponent, CitasComponent, OrdenesComponent, ReclamosOrdenComponent, CancelarCitaComponent, IncidenciaCitaComponent, RegistrarDetalleComponent, IncidenciaServicioComponent, ResponderSolicitudComponent]
})
export class AgendaModule { }