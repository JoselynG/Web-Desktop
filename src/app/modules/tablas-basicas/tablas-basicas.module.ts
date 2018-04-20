import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasBasicasRoutingModule } from './tablas-basicas-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import {  AgregarTipoParametroComponent, AgregarParametroComponent, AgregarValorParametroComponent,
  ParametrosComponent } from './parametros/parametros.component';
import { CategoriasComponent, EditarTipoReclamoComponent } from './categorias/categorias.component';
import { EmpresaComponent } from './empresa/empresa.component';



@NgModule({
  imports: [
    CommonModule,
    TablasBasicasRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[     
    ParametrosComponent ,
    AgregarValorParametroComponent,
    CategoriasComponent,
    EditarTipoReclamoComponent,
    EmpresaComponent
  ],
  
  declarations: [ AgregarTipoParametroComponent, AgregarParametroComponent,
    ParametrosComponent , AgregarValorParametroComponent, CategoriasComponent,  EditarTipoReclamoComponent, EmpresaComponent]
})
export class TablasBasicasModule { }
