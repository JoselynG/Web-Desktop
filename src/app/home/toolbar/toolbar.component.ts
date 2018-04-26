import { Component, OnInit } from '@angular/core';

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
    fullName: "Maynard J. Keenan",
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
  constructor() { }

  ngOnInit() {
  }

}
