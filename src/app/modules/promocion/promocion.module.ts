import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPromocionComponent } from './listado-promocion/listado-promocion.component';
import { PromocionRoutingModule } from './promocion-routing.module';
import { DifundirPromocionComponent } from './difundir-promocion/difundir-promocion.component';

@NgModule({
  imports: [
    CommonModule,
    PromocionRoutingModule,
    MaterialDesignModule
  ],
  declarations: [ ListadoPromocionComponent, DifundirPromocionComponent]
})
export class PromocionModule { }
