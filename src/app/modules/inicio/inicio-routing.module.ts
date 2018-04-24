import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardEmpleadoComponent } from './dashboard-empleado/dashboard-empleado.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardFullComponent
  },
  {
    path: 'dashboardEmpleado',
    component: DashboardEmpleadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
