import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { PortalWebRoutingModule } from './portal-web-routing.module';
import { DisenioComponent } from './disenio/disenio.component';
import { ImagenesComponent } from './disenio/imagenes/imagenes.component';
import { ColoresComponent } from './disenio/colores/colores.component';
import { TipografiaComponent } from './disenio/tipografia/tipografia.component';
<<<<<<< HEAD
import { EmpresaComponent } from './empresa/empresa.component';
import { LandingComponent } from './landing/landing.component';
import { GaleriaComponent } from './galeria/galeria.component';
=======
>>>>>>> 93b56efe66c816c126c00334cc69ee1ce4761dbc

@NgModule({
  imports: [
    CommonModule,
    PortalWebRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  entryComponents:[
<<<<<<< HEAD
    DisenioComponent,EmpresaComponent
  ],
  declarations: [DisenioComponent, ImagenesComponent, ColoresComponent, TipografiaComponent, EmpresaComponent, LandingComponent, GaleriaComponent]
=======
    DisenioComponent
  ],
  declarations: [DisenioComponent, ImagenesComponent, ColoresComponent, TipografiaComponent]
>>>>>>> 93b56efe66c816c126c00334cc69ee1ce4761dbc
})
export class PortalWebModule { }
