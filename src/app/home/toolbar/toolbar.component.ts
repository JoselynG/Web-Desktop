import { UsuariosService } from './../../provider/usuarios/usuarios.service';
import { UserService } from './../../provider/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../provider/empleados/empleados.service';

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

  userI: any;
  empleado: any;
  empleL: {
    apellido: string
    nombre: string
    cedula: string
    direccion: string
    estatus: string
    fecha_creacion: Date
    fecha_nacimiento: Date
    id: number
    id_ciudad: number
    id_usuario: number
    imagen: string
    telefono: string  
    sexo: string
    visible: boolean
  }
  url: string
  constructor(
    public router: Router,
    public usuario: UserService,
    public user: UsuariosService,
    public emp: EmpleadosService,
  ) { 
    this.empleL = {
      apellido: '',
      nombre: '',
      cedula: '',
      direccion: '',
      estatus: '',
      fecha_creacion: null,
      fecha_nacimiento: null,
      id: null,
      id_ciudad: null,
      id_usuario: null,
      imagen: '',
      telefono: '',  
      sexo: '',
      visible: null
    }
    this.url = "http://localhost:3000/files/empleado/"
  }

  ngOnInit() {
    this.getUser()
    this.getEmpl()
  }

  getUser(){
    this.user.getUsuario(Number(localStorage.getItem('id_user'))).subscribe(
      (data)=>{
          this.userI = data['data']
          console.log(this.userI)
      }, (error)=>{
        console.log(error)
      }
    )
  }

  getEmpl(){
    let id=Number(localStorage.getItem('id_user'))
    this.emp.getEmpleados().subscribe(
      (data)=>{
        this.empleado = data['data']
        for(let i=0; i<this.empleado.length; i++){
          
            if(this.empleado[i].id_usuario === id){
              this.empleL = this.empleado[i]
              i=this.empleado.length;
              localStorage.setItem('id', String(this.empleL.id))
              
            }
        }
        this.url = this.url + this.empleL.id +'.'+this.empleL.imagen
      },(error)=>{
        console.log(error)        
      }
    )
  }

  cerrarSesion(){
    this.usuario.logout()
    this.router.navigate(['']);
  }

}
