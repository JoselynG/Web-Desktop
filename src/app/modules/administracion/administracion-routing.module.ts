import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseDatosComponent } from './base-datos/base-datos.component';
import { SistemaComponent } from './sistema/sistema.component';
import { SeguridadFuncionalComponent } from './seguridad-funcional/seguridad-funcional.component';
import { AsignarFuncionesComponent } from './seguridad-funcional/asignar-funciones/asignar-funciones.component';
import { RolesComponent } from './seguridad-funcional/roles/roles.component';
import { ListConsejosComponent } from './list-consejos/list-consejos.component';
import { CrearConsejoComponent } from './crear-consejo/crear-consejo.component';
import { AuditoriaComponent } from './base-datos/auditoria/auditoria.component';

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
  {
    path: 'seguridadfuncional/roles',
    component: RolesComponent
  },
  {
    path: 'consejos',
    component: ListConsejosComponent,
  },
  {
    path: 'crear-consejo',
    component: CrearConsejoComponent
  },

  {
    path: 'base-datos/auditoria',
    component: AuditoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
