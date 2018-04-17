import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasBasicasRoutingModule } from './tablas-basicas-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { EditarTipoServicioComponent, CrearTipoServicioComponent, ParametrosComponent } from './parametros/parametros.component';

@NgModule({
  imports: [
    CommonModule,
    TablasBasicasRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  
  entryComponents:[
    CrearTipoServicioComponent,
    EditarTipoServicioComponent
  ],
  
  declarations: [ParametrosComponent,  CrearTipoServicioComponent, EditarTipoServicioComponent]
})
export class TablasBasicasModule { }
