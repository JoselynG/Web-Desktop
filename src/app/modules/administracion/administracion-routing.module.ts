import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListConsejosComponent } from './list-consejos/list-consejos.component';
import { CrearConsejoComponent } from './crear-consejo/crear-consejo.component';

const routes: Routes = [

  {
    path: 'consejos',
    component: ListConsejosComponent,
  },
  {
    path: 'crear-consejo',
    component: CrearConsejoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
