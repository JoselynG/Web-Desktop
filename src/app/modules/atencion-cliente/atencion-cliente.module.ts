import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionClienteRoutingModule } from './atencion-cliente-routing.module';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    AtencionClienteRoutingModule,
    MaterialDesignModule,
  ],
  declarations: [ReclamosComponent]
})
export class AtencionClienteModule { }
