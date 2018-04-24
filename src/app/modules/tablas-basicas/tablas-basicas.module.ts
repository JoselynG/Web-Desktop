import { ParametrosComponent} from './parametros/parametros.component';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { TipoComentarioComponent, CrearTipoComentarioComponent } from './categorias/tipo-comentario/tipo-comentario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasBasicasRoutingModule } from './tablas-basicas-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { TipoReclamoComponent, CrearTipoReclamoComponent } from './categorias/tipo-reclamo/tipo-reclamo.component';
import { FormsModule } from '@angular/forms';
import { EmpresaComponent } from './empresa/empresa.component';
import { CaracteristicasComponent, CrearNuevoParametroComponent, CrearTipoParametroComponent } from './parametros/caracteristicas/caracteristicas.component';
import { ValorParametroComponent, CrearValorParametroComponent } from './parametros/valor-parametro/valor-parametro.component';


@NgModule({
  imports: [
    CommonModule,
    TablasBasicasRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  entryComponents:[
    CrearTipoReclamoComponent,    
    CrearTipoComentarioComponent,
    CrearNuevoParametroComponent,
    CrearTipoParametroComponent,
    CrearValorParametroComponent,
  ],
  declarations: [
    CategoriasComponent, 
    TipoComentarioComponent,
    TipoReclamoComponent,
    CrearTipoReclamoComponent,
    CrearTipoComentarioComponent,
    EmpresaComponent,
    ParametrosComponent,
    CaracteristicasComponent,
    CrearNuevoParametroComponent,
    CrearTipoParametroComponent,
    ValorParametroComponent,
    CrearValorParametroComponent,
  ]
})
export class TablasBasicasModule { }
