import { CrearServiciosComponent } from './nuevo-servicio/crear-servicios/crear-servicios.component';
import { NuevoServicioComponent } from './nuevo-servicio/nuevo-servicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ListaServiciosComponent, CrearServicioComponent, EditarServicioComponent } from './lista-servicios/lista-servicios.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { ListaInsumosComponent } from './lista-insumos/lista-insumos.component';
import { FormsModule } from '@angular/forms';
import { ParametroComponent } from './nuevo-servicio/parametro/parametro.component';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    CrearServicioComponent,
    EditarServicioComponent
  ],
  declarations: [ListaServiciosComponent, CrearServicioComponent, ListaInsumosComponent, EditarServicioComponent, NuevoServicioComponent, CrearServiciosComponent, ParametroComponent]
})
export class ServiciosModule { }
