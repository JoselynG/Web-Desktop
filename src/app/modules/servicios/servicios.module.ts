import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ListaServiciosComponent, CrearServicioComponent } from './lista-servicios/lista-servicios.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialDesignModule
  ],
  entryComponents:[
    CrearServicioComponent
  ],
  declarations: [ListaServiciosComponent, CrearServicioComponent]
})
export class ServiciosModule { }
