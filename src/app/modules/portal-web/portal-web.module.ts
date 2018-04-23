import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { PortalWebRoutingModule } from './portal-web-routing.module';
import { DisenioComponent } from './disenio/disenio.component';
import { ImagenesComponent } from './disenio/imagenes/imagenes.component';
import { ColoresComponent } from './disenio/colores/colores.component';
import { TipografiaComponent } from './disenio/tipografia/tipografia.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { LandingComponent } from './landing/landing.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LandingPromocionesComponent } from './landing-promociones/landing-promociones.component';
import { LandingEstilistasComponent } from './landing-estilistas/landing-estilistas.component';
import { LandingConsejosComponent } from './landing-consejos/landing-consejos.component';
import { LandingTwiterComponent } from './landing-twiter/landing-twiter.component';

@NgModule({
  imports: [
    CommonModule,
    PortalWebRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  entryComponents: [
    DisenioComponent, EmpresaComponent,
    DisenioComponent,
    ImagenesComponent,
    ColoresComponent,
    TipografiaComponent,
    EmpresaComponent,
    LandingComponent,
    GaleriaComponent,
    LandingPromocionesComponent,
    LandingEstilistasComponent,
    LandingConsejosComponent,
    LandingTwiterComponent
  ],
  declarations: [DisenioComponent,
    ImagenesComponent,
    ColoresComponent,
    TipografiaComponent,
    EmpresaComponent,
    LandingComponent,
    GaleriaComponent,
    LandingPromocionesComponent,
    LandingEstilistasComponent,
    LandingConsejosComponent,
    LandingTwiterComponent]
})
export class PortalWebModule { }
