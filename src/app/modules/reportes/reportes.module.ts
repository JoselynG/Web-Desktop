import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { GraficasDirective } from './graficas.directive';
import { ServiciosAtendidosComponent } from './servicios-atendidos/servicios-atendidos.component';
import { ClientesFrecuentesComponent } from './clientes-frecuentes/clientes-frecuentes.component';

@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
    FormsModule
  ],
  declarations: [PruebaComponent, GraficasDirective, ServiciosAtendidosComponent, ClientesFrecuentesComponent]
})
export class ReportesModule { }
