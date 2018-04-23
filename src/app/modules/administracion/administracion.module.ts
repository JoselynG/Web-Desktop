import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ListConsejosComponent } from './list-consejos/list-consejos.component';
import { CrearConsejoComponent } from './crear-consejo/crear-consejo.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialDesignModule
  ],
  declarations: [ListConsejosComponent, CrearConsejoComponent]
})
export class AdministracionModule { }
