import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasBasicasRoutingModule } from './tablas-basicas-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import {  AgregarTipoParametroComponent, AgregarParametroComponent, AgregarValorParametroComponent,
  ParametrosComponent } from './parametros/parametros.component';
import { CategoriasComponent, CrearCategoriaComponent} from './categorias/categorias.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DatosNegocioComponent, CrearObjetivosComponent } from './empresa/datos-negocio/datos-negocio.component';
import { LogoNegocioComponent } from './empresa/logo-negocio/logo-negocio.component';



@NgModule({
  imports: [
    CommonModule,
    TablasBasicasRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
     
    AgregarTipoParametroComponent, 
    AgregarParametroComponent,
    ParametrosComponent ,
    AgregarValorParametroComponent,
    CategoriasComponent,
    CrearCategoriaComponent,
    EmpresaComponent,
    CrearObjetivosComponent
  ],
  
  declarations: [ AgregarTipoParametroComponent, AgregarParametroComponent,
    ParametrosComponent , AgregarValorParametroComponent, CategoriasComponent, CrearCategoriaComponent, 
    EmpresaComponent, DatosNegocioComponent, LogoNegocioComponent,
    CrearObjetivosComponent]
})
export class TablasBasicasModule { }
