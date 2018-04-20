import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseDatosComponent } from './base-datos/base-datos.component';
import { SistemaComponent } from './sistema/sistema.component';
import { SeguridadFuncionalComponent } from './seguridad-funcional/seguridad-funcional.component';
import { AsignarFuncionesComponent } from './seguridad-funcional/asignar-funciones/asignar-funciones.component';

const routes: Routes = [
  {
    path: 'basedatos',
    component: BaseDatosComponent
  },
  {
    path: 'sistema',
    component: SistemaComponent
  },
  {
    path: 'seguridadfuncional',
    component: SeguridadFuncionalComponent
  },
  {
    path: 'seguridadfuncional/asignarfunciones',
    component: AsignarFuncionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
