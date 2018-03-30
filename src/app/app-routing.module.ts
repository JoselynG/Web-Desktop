import { TestComponent } from './test/test.component';
import { LoginComponent } from './home/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {
    path:'',
    component: LoginComponent
    //pathMatch: 'full',
    //redirectTo: 'inicio'
  },
  {
    path:'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
