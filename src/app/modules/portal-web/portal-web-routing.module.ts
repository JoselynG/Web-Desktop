import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisenioComponent } from './disenio/disenio.component';

const routes: Routes = [
  {
    path: 'disenio',
    component: DisenioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalWebRoutingModule { }
