import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { ClientePrincipalComponent } from './ver-cliente/cliente-principal/cliente-principal.component';
import { ClientePerfilComponent } from './ver-cliente/cliente-perfil/cliente-perfil.component';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    ClientePerfilComponent,
    ClientePrincipalComponent,
    ListadoClientesComponent
  ],
  declarations: [
  
    ClientePerfilComponent,
    ClientePrincipalComponent,
    ListadoClientesComponent,
    VerClienteComponent,
  ]
})
export class ClientesModule { }
