import { ReporteServicioComponent } from './estructurados/reporte-servicio/reporte-servicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { EstadisticosComponent } from './estadisticos/estadisticos.component';
import { PruebaComponent } from './estadisticos/prueba/prueba.component';
import { ServiciosAtendidosComponent } from './estadisticos/servicios-atendidos/servicios-atendidos.component';
import { ClientesFrecuentesComponent } from './estadisticos/clientes-frecuentes/clientes-frecuentes.component';
import { SuscripcionComponent } from './estadisticos/suscripcion/suscripcion.component';
import { EstructuradosComponent } from './estructurados/estructurados.component';
import { ReclamosComponent } from './estadisticos/reclamos/reclamos.component';
import { ReporteComentariosComponent } from './estructurados/reporte-comentarios/reporte-comentarios.component';
import { ReporteReclamosComponent } from './estructurados/reporte-reclamos/reporte-reclamos.component';
import { ReporteSolicitudesComponent } from './estructurados/reporte-solicitudes/reporte-solicitudes.component';

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
      },
      {
        path: "reclamos",
        component: ReclamosComponent
      }
    ]
  },
  {
    path: 'reportesEstructurados',
    component: EstructuradosComponent,
    children: [
      {
        path: 'reporteServicio',
        component: ReporteServicioComponent
      },
      {
        path: 'reporteComentrario',
        component: ReporteComentariosComponent
      },
      {
        path: 'reporteReclamos',
        component: ReporteReclamosComponent
      },
      {
        path: 'reporteSolicitudes',
        component: ReporteSolicitudesComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
