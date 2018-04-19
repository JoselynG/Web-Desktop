import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisenioComponent } from './disenio/disenio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  {
    path: 'disenio',
    component: DisenioComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalWebRoutingModule { }
