import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseDatosComponent } from './base-datos/base-datos.component';

const routes: Routes = [
  {
    path: 'basedatos',
    component: BaseDatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
