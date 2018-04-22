import { GraficosDirective } from './test/graficos.directive';

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
import { ClientesModule } from "./modules/clientes/clientes.module";
import { PortalWebModule } from './modules/portal-web/portal-web.module';
import { TablasBasicasModule } from './modules/tablas-basicas/tablas-basicas.module';
import { ReportesModule } from './modules/reportes/reportes.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavListComponent,
    ToolbarComponent,
    TestComponent,
    GraficosDirective
    
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
    PromocionModule,
    ClientesModule,
    PortalWebModule,
    TablasBasicasModule,
    PromocionModule,
    ReportesModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
