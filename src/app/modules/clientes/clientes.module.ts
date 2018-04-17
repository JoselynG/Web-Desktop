import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent, ClientePerfilComponent, ClientePrincipalComponent } from "./clientes.component";
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    ClientePerfilComponent,
    ClientePrincipalComponent
  ],
  declarations: [ClientesComponent,  ClientePerfilComponent, ClientePrincipalComponent]
})
export class ClientesModule { }
