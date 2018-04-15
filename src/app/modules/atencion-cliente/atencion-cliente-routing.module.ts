import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { DudasComponent } from './dudas/dudas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamosComponent} from './reclamos/reclamos.component';

const routes: Routes = [

 {
    path:'reclamos',
    component: ReclamosComponent
  },
  {
    path:'dudas',
    component: DudasComponent
  },
  {
    path:'opiniones',
    component: OpinionesComponent
  },
  {
    path:'sugerencias',
    component: SugerenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionClienteRoutingModule { }
