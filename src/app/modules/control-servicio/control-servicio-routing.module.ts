
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { RegistrarDetalleComponent } from './registrar-detalle/registrar-detalle.component';



const routes: Routes = [
  {
    path:'timeline',
    component: TimelineComponent,

  },
  {
    path:'timeline/registrar',
    component: RegistrarDetalleComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlServicioRoutingModule { }
