import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardFullComponent
  },
  {
    path: 'dashboardEmpleado',
    component: DashboardFullComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
