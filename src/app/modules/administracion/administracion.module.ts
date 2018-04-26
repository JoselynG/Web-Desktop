import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { BaseDatosComponent } from './base-datos/base-datos.component';
import { HistoricosComponent } from './base-datos/historicos/historicos.component';
import { RespaldoComponent } from './base-datos/respaldo/respaldo.component';
import { DepuracionesComponent } from './base-datos/depuraciones/depuraciones.component';
import { HistoricoServicioComponent } from './base-datos/historicos/historico-servicio/historico-servicio.component';
import { HistoricoPromocionComponent } from './base-datos/historicos/historico-promocion/historico-promocion.component';
import { HistoricoReclamoComponent } from './base-datos/historicos/historico-reclamo/historico-reclamo.component';


@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],

  entryComponents:[     
    BaseDatosComponent
  ],
  declarations: [BaseDatosComponent, HistoricosComponent, RespaldoComponent, DepuracionesComponent, HistoricoServicioComponent, HistoricoPromocionComponent, HistoricoReclamoComponent]
})
export class AdministracionModule { }
