import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSistemaRoutingModule } from './admin-sistema-routing.module';
import { EditarTipoServicioComponent, CrearTipoServicioComponent, ParametrosComponent } from './parametros/parametros.component';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    AdminSistemaRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    CrearTipoServicioComponent,
    EditarTipoServicioComponent
  ],
  declarations: [ParametrosComponent,  CrearTipoServicioComponent, EditarTipoServicioComponent]
})
export class AdminSistemaModule { }
