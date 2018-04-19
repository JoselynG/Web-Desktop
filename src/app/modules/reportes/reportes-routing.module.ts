import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { EstadisticosComponent } from './estadisticos/estadisticos.component';
import { PruebaComponent } from './estadisticos/prueba/prueba.component';
import { ServiciosAtendidosComponent } from './estadisticos/servicios-atendidos/servicios-atendidos.component';
import { ClientesFrecuentesComponent } from './estadisticos/clientes-frecuentes/clientes-frecuentes.component';
import { SuscripcionComponent } from './estadisticos/suscripcion/suscripcion.component';
import { EstructuradosComponent } from './estructurados/estructurados.component';

const routes: Routes = [
  {
    path: 'reportesEstadísticos',
    component: EstadisticosComponent,
    children: [
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
      },
      
      {
        path: "suscripciones",
        component: SuscripcionComponent
      }
    ]
  },
  {
    path: 'reportesEstructurados',
    component: EstructuradosComponent,
    children: []
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
