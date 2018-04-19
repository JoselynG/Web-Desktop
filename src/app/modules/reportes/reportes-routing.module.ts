import { ClientesFrecuentesComponent } from './clientes-frecuentes/clientes-frecuentes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { ServiciosAtendidosComponent } from './servicios-atendidos/servicios-atendidos.component';

const routes: Routes = [
  {
    path: "prueba",
    component: PruebaComponent
  },
  {
    path: "serviciosAtendidos",
    component: ServiciosAtendidosComponent
  },
  {
    path: "clientesFrecuentes",
    component: ClientesFrecuentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
