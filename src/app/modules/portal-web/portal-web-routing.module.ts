import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisenioComponent } from './disenio/disenio.component';
<<<<<<< HEAD
import { EmpresaComponent } from './empresa/empresa.component';
import { GaleriaComponent } from './galeria/galeria.component';
=======
>>>>>>> 93b56efe66c816c126c00334cc69ee1ce4761dbc

const routes: Routes = [
  {
    path: 'disenio',
    component: DisenioComponent
<<<<<<< HEAD
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
=======
>>>>>>> 93b56efe66c816c126c00334cc69ee1ce4761dbc
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalWebRoutingModule { }
