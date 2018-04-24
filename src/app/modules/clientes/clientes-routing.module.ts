import { ClientePrincipalComponent } from './ver-cliente/cliente-principal/cliente-principal.component';

import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientePerfilComponent } from './ver-cliente/cliente-perfil/cliente-perfil.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ListadoClientesComponent
  },
  {
    path: 'detalleCliente',
    component: VerClienteComponent,
    children: [
      {
        path: 'info',
        component: ClientePrincipalComponent
      },
      {
        path: 'clientePerfil',
        component: ClientePerfilComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
