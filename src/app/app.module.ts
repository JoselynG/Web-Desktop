
import { AgendaModule } from './modules/agenda/agenda.module';
import { NavListComponent } from './home/nav-list/nav-list.component';
import { SharedModule } from './shared/shared.module';
import { MaterialDesignModule } from './material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { AtencionClienteModule } from './modules/atencion-cliente/atencion-cliente.module';
import { FormsModule } from '@angular/forms';
import { InicioModule } from './modules/inicio/inicio.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { PromocionModule } from './modules/promocion/promocion.module';
<<<<<<< HEAD
import { ClientesModule } from "./modules/clientes/clientes.module";
import { PortalWebModule } from './modules/portal-web/portal-web.module';
=======
import { TablasBasicasModule } from './modules/tablas-basicas/tablas-basicas.module';
>>>>>>> 842d4be333b5930b06c10bb0f25ebfb3b3bd2919




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavListComponent,
    ToolbarComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    InicioModule,
    MaterialDesignModule,
    AtencionClienteModule,
    FormsModule,
    AgendaModule,
    ServiciosModule,
<<<<<<< HEAD
    AdminSistemaModule,
    PromocionModule,
    ClientesModule,
    PortalWebModule
=======
    TablasBasicasModule,
    PromocionModule
>>>>>>> 842d4be333b5930b06c10bb0f25ebfb3b3bd2919
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
