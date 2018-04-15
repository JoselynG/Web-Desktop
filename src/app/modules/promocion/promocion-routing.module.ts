import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPromocionComponent} from './listado-promocion/listado-promocion.component';
import  {DifundirPromocionComponent } from './difundir-promocion/difundir-promocion.component';



const routes: Routes = [
  {
    path: 'promociones',
    component:ListadoPromocionComponent,
  },

  {
path:'difundir',
 component:DifundirPromocionComponent, 

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRu { }