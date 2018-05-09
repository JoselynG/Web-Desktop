import { ServiciosService } from './provider/servicios/servicios.service';
import { PerfilModule } from './modules/perfil/perfil.module';
import { PortalWebModule } from './modules/portal-web/portal-web.module';
import { GraficosDirective } from './test/graficos.directive';
import { AgendaModule } from './modules/agenda/agenda.module';
import { NavListComponent } from './home/nav-list/nav-list.component';
import { SharedModule } from './shared/shared.module';
import { MaterialDesignModule } from './material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { AtencionClienteModule } from './modules/atencion-cliente/atencion-cliente.module';
import { FormsModule } from '@angular/forms';
import { InicioModule } from './modules/inicio/inicio.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { TablasBasicasModule } from './modules/tablas-basicas/tablas-basicas.module';
import { ReportesModule } from './modules/reportes/reportes.module';
import { AdministracionModule } from './modules/administracion/administracion.module';
// Providers
import { ConsejosService } from './provider/consejos/consejos.service';
import { MarketingModule } from './modules/marketing/marketing.module';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';
import { PerfilUsuarioModule } from './modules/perfil-usuario/perfil-usuario.module';
import { PromocionesService } from './provider/promocion/promociones.service';
import { CategoriasServicioService } from './provider/categorias-servicio/categorias-servicio.service';
import { ClientesService } from './provider/clientes/clientes.service';
import { UsuariosService } from './provider/usuarios/usuarios.service';
import { EmpleadosService } from './provider/empleados/empleados.service';
import { AuthService } from './provider/auth/auth.service';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './provider/user/user.service';
import { ParametroService } from './provider/parametro/parametro.service';
import { TipoParametroService } from './provider/tipo-parametro/tipo-parametro.service';
import { ValorParametroService } from './provider/valor-parametro/valor-parametro.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavListComponent,
    ToolbarComponent,
    TestComponent,
    GraficosDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialDesignModule,
    FormsModule,
    InicioModule,
    TablasBasicasModule,
    ClientesModule,
    MaterialDesignModule,
    AgendaModule,
    AtencionClienteModule,
    MarketingModule,
    AdministracionModule,
    ReportesModule,
    NotificacionesModule,
    PerfilUsuarioModule,
    PortalWebModule,
    PerfilModule,
    HttpClientModule
  ],


  providers: [
    ConsejosService,
    ClientesService,
    UsuariosService,
    EmpleadosService,
    AuthService,
    UserService,
    PromocionesService,
    CategoriasServicioService,
    ServiciosService,
    ParametroService,
    TipoParametroService,
    ValorParametroService
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
