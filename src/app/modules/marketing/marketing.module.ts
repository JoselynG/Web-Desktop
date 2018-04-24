import { ListadoPromocionComponent } from './promocion/listado-promocion/listado-promocion.component';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { FormsModule } from '@angular/forms';
import { NuevoServicioComponent } from './servicios/nuevo-servicio/nuevo-servicio.component';
import { ListaServiciosComponent} from './servicios/lista-servicios/lista-servicios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingRoutingModule } from './marketing-routing.module';
import { CrearServiciosComponent } from './servicios/nuevo-servicio/crear-servicios/crear-servicios.component';
import { ParametroComponent } from './servicios/nuevo-servicio/parametro/parametro.component';
import { DifundirPromocionComponent } from './promocion/difundir-promocion/difundir-promocion.component';


@NgModule({
  imports: [
    CommonModule,
    MarketingRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: [
    ListaServiciosComponent,
    NuevoServicioComponent,
    CrearServiciosComponent,
    ParametroComponent,
    DifundirPromocionComponent,
    ListadoPromocionComponent
  ]
})
export class MarketingModule { }
