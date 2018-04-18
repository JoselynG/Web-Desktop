import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [
  {
    path: 'parametros',
    component: ParametrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasBasicasRoutingModule { }
