import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ListaServiciosComponent, CrearServicioComponent, EditarServicioComponent } from './lista-servicios/lista-servicios.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { ListaInsumosComponent } from './lista-insumos/lista-insumos.component';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialDesignModule
  ],
  entryComponents:[
    CrearServicioComponent,
    EditarServicioComponent
  ],
  declarations: [ListaServiciosComponent, CrearServicioComponent, ListaInsumosComponent, EditarServicioComponent]
})
export class ServiciosModule { }
