import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamosComponent} from './reclamos/reclamos.component';

const routes: Routes = [

 {
    path:'reclamos',
    component: ReclamosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionClienteRoutingModule { }
