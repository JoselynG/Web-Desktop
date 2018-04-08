import { AgendaComponent } from './agenda/agenda.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { RegistrarDetalleComponent } from './registrar-detalle/registrar-detalle.component';
import { IncidenciaServicioComponent } from './registrar-detalle/incidencia-servicio/incidencia-servicio.component';


const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'timeline/registrar',
    component: RegistrarDetalleComponent
  },
  {
    path: 'timeline/registrar-incidencia',
    component: IncidenciaServicioComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlServicioRoutingModule { }
