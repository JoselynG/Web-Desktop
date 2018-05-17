import { UserService } from './../../provider/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface user{
  fullName: string;
  email: string;
  imageUrl: string;
  id: string;
}
interface notifica{
  titulo: string;
  mensaje: string;
  fecha: string;
  
}
interface notificacion{
  ti: string;
  msj: string;
  fech: string;
  
}


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  userInfo: user = {
    fullName: "Veronica Uzcategui",
    email: "maynard@tool.com",
    imageUrl: "/assets/img/perfil.jpg",
    id: "1",
  }
  notiInfo: notifica= {
    titulo: "Nueva solicitud de servicio",
    fecha: "25/04/2018",
    mensaje: "Rosa Piña, solicitud nro-001",
  
  }
  notificaInfo: notificacion= {
    ti: "Nueva solicitud de servicio",
    fech: "26/04/2018",
    msj: "Mirian Silva, solicitud nro-002",
  
  }
  constructor(
    public router: Router,
    public usuario: UserService
  ) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.usuario.logout()
    this.router.navigate(['']);
  }

}
