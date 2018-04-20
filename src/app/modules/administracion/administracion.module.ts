import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { BaseDatosComponent } from './base-datos/base-datos.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { SistemaComponent } from './sistema/sistema.component';
import { SeguridadFuncionalComponent } from './seguridad-funcional/seguridad-funcional.component';
import { AsignarFuncionesComponent } from './seguridad-funcional/asignar-funciones/asignar-funciones.component';

@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialDesignModule
  ],
  declarations: [BaseDatosComponent, SistemaComponent, SeguridadFuncionalComponent, AsignarFuncionesComponent]
})
export class AdministracionModule { }
