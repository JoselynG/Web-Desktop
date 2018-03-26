import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
   
   },
  {
    path: "login",
    component: LoginComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
