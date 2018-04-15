import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosComponent, CrearTipoServicioComponent, EditarTipoServicioComponent } from './parametros.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    CrearTipoServicioComponent,
    EditarTipoServicioComponent
  ],
  
  declarations: [ParametrosComponent,  CrearTipoServicioComponent, EditarTipoServicioComponent]
})
export class ParametrosModule { }
