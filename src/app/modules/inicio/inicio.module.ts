import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule { }
