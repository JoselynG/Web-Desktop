import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { BaseDatosComponent } from './base-datos/base-datos.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { SistemaComponent } from './sistema/sistema.component';
import { SeguridadFuncionalComponent, NuevoUsuarioComponent } from './seguridad-funcional/seguridad-funcional.component';
import { AsignarFuncionesComponent } from './seguridad-funcional/asignar-funciones/asignar-funciones.component';
import { RolesComponent } from './seguridad-funcional/roles/roles.component';
import { NuevoRolComponent } from './seguridad-funcional/roles/nuevo-rol/nuevo-rol.component';
import { ListConsejosComponent } from './list-consejos/list-consejos.component';
import { CrearConsejoComponent } from './crear-consejo/crear-consejo.component';
import { PasosComponent } from './pasos/pasos.component';

@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents: [
    NuevoRolComponent, NuevoUsuarioComponent
  ],
  declarations: [BaseDatosComponent, SistemaComponent,
    SeguridadFuncionalComponent, AsignarFuncionesComponent,
    RolesComponent, NuevoRolComponent, NuevoUsuarioComponent,
    ListConsejosComponent, CrearConsejoComponent, PasosComponent]
})
export class AdministracionModule { }
