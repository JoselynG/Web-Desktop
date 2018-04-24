import { ValorParametroComponent } from './parametros/valor-parametro/valor-parametro.component';
import { TipoReclamoComponent } from './categorias/tipo-reclamo/tipo-reclamo.component';
import { TipoComentarioComponent } from './categorias/tipo-comentario/tipo-comentario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { CaracteristicasComponent } from './parametros/caracteristicas/caracteristicas.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasComponent,
    children: [
      {
        path: 'tipoComentario',
        component: TipoComentarioComponent
      },
      {
        path: 'tipoReclamo',
        component: TipoReclamoComponent
      },
    ]
  },
  {
    path: 'empresaEditar',
    component: EmpresaComponent
  },
  {
    path: 'parametros',
    component: ParametrosComponent,
    children: [
      {
        path: 'caracteristicas',
        component: CaracteristicasComponent
      },
      {
        path: 'valores',
        component: ValorParametroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasBasicasRoutingModule { }
