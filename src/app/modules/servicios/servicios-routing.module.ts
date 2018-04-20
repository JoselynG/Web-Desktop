import { ListaInsumosComponent } from './lista-insumos/lista-insumos.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoServicioComponent } from './nuevo-servicio/nuevo-servicio.component';

const routes: Routes = [
  {
    path: "servicios",
    component: ListaServiciosComponent
  },
  {
    path: "insumos",
    component: ListaInsumosComponent
  },
  {
    path: "nuevoServicio",
    component: NuevoServicioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
