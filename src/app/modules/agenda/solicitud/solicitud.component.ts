import { TipoRespSolicitudService } from './../../../provider/tipo-resp-solicitud/tipo-resp-solicitud.service';
import { EspecialidadService } from './../../../provider/especialidad/especialidad.service';
import { RespuestaSolicitudService } from './../../../provider/respuesta-solicitud/respuesta-solicitud.service';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VistaSolicitudService } from './../../../provider/vista-solicitud/vista-solicitud.service';
import { ServicioSolicitadoService } from './../../../provider/servicio-solicitado/servicio-solicitado.service';
import { SolicitudService } from '../../../provider/solicitud/solicitud.service';
import { ClientesService } from '../../../provider/clientes/clientes.service';
import { EmpleadosService } from '../../../provider/empleados/empleados.service';

interface Detalle{
  clientName: string;
  servicios: string;
  empleado: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  fecha?: string;
  
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  solicitud: Array< {
    id: number;
    id_cliente: number;
    id_promocion: number;
    nombre: string;
    apellido: string;
    cantidad_servicios: number;
    empleado_pelu: number;
    empleado_maqui: number;
    servicios_solicitados: Array <{
      id: number;
      id_servicio: number;
      solicitud: number;
      nombre_servicio: string;
      tipo_servicio: string;
    }>;
    empleadoP_nombre: string;
    empleadoM_nombre: string;
    empleadoP_apellido: string;
    empleadoM_apellido: string;
    estado: string;
  }>;
  empleadoSelP: {
    id: number;
    nombre: string;
    apellido: string;
    cedula: number
    telefono: string
    direccion: string
    fecha_nacimiento: string
    estatus: string
    id_ciudad: number
    id_usuario: number
    imagen: string
    fecha_creacion: string
    visible: boolean
  };
  
  empleadoSelM: {
    id: number;
    nombre: string;
    apellido: string;
    cedula: number
    telefono: string
    direccion: string
    fecha_nacimiento: string
    estatus: string
    id_ciudad: number
    id_usuario: number
    imagen: string
    fecha_creacion: string
    visible: boolean
  };
  empleadosSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  
  constructor(
    public dialog: MatDialog,
    public solic: VistaSolicitudService,
    public empleado: EmpleadosService
  ) { 
    this.solicitud = [{
      id: 0,
      id_cliente: 0,
      id_promocion: 0,
      nombre: '',
      apellido: '',
      cantidad_servicios: 0,
      empleado_pelu: null,
      empleado_maqui: null,
      servicios_solicitados: [],
      empleadoP_nombre: '',
      empleadoM_nombre: '',
      empleadoP_apellido: '',
      empleadoM_apellido: '',
      estado: ''
    }]
    this.empleadoSelP = {
      id: null,
      nombre: '',
      apellido: '',
      cedula: null,
      telefono: '',
      direccion: '',
      fecha_nacimiento: '',
      estatus: '',
      id_ciudad: null,
      id_usuario: null,
      imagen: '',
      fecha_creacion: '',
      visible: true
    };
    
    this.empleadoSelM = {
      id: null,
      nombre: '',
      apellido: '',
      cedula: null,
      telefono: '',
      direccion: '',
      fecha_nacimiento: '',
      estatus: '',
      id_ciudad: null,
      id_usuario: null,
      imagen: '',
      fecha_creacion: '',
      visible: true
    };
  }

  ngOnInit() {
    this.getSolicitud();
  }

  getSolicitud(){
    this.solic.getSolicitud().subscribe(
      (data)=>{
        this.solicitud =data['data'];        
        for(let i=0; i<this.solicitud.length; i++){
          if(this.solicitud[i].empleado_pelu != null){
            this.empleado.getEmpleadoEspecifico(this.solicitud[i].empleado_pelu).subscribe(
              (data)=>{
                this.empleadoSelP =data['data'];
                this.solicitud[i].empleadoP_nombre = this.empleadoSelP.nombre;
                //console.log(this.solicitud[i].empleadoP_nombre )
                this.solicitud[i].empleadoP_apellido = this.empleadoSelP.apellido;    
              },(error) =>{
                console.log(error);
              }
            );
          }
          if(this.solicitud[i].empleado_maqui != null){
            this.empleado.getEmpleadoEspecifico(this.solicitud[i].empleado_maqui).subscribe(
              (data)=>{
                this.empleadoSelM =data['data'];
                  this.solicitud[i].empleadoM_nombre = this.empleadoSelM.nombre;
                  this.solicitud[i].empleadoM_apellido = this.empleadoSelM.apellido; 
              },(error) =>{
                console.log(error);
              }
            );
           
          }
        }
      },(error) =>{
        console.log(error);
      }
    )
    
  }
  
  openDialogResponder(solicitud){
    const dialogRef = this.dialog.open(ResponderSolicitudComponent, {
      height: '600px',
      width: '500px',
      data: {solic: solicitud}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado incidencia');
    });}
}

@Component({
  selector: 'app-responder-solicitud',
  templateUrl: './responder-solicitud.component.html',
  styleUrls: ['./responder-solicitud.component.scss']
})
export class ResponderSolicitudComponent {
  tipoRespSelec: number;
  solicitud: any;
  cliente: string;
  servicios: any;
  empleadoP: string;
  empleadoM: string;
  empleadosPelu: Array <{         //traer empleados de peluquería
    value: number,
    viewValue: string
  }>;     
  empleadoMaqui: Array <{         //traer empleados de peluquería
    value: number,
    viewValue: string
  }>;     
  empleadosPeluAux: any;
  empleadosMaquiAux: any;
  empleadosBD: any;
  especialidadEmpleado: any;
  enviarResp: {
    id_solicitud: number;
    id_tipo_respuesta_solicitud: number;
    descripcion: string;
  };
  actualizarSolic: {
    estado: string;
    empleado_pelu: number;
    empleado_maqui: number;
  }
  tipoRespuestas: any;
  //valor = false;
  filtro = [
    {value: 1, viewValue: 'Positiva'},
    {value: 2, viewValue: 'Negativa'},
  ];
  constructor(public dialogRef: MatDialogRef<ResponderSolicitudComponent>,
    public respuesta: RespuestaSolicitudService,
    public empleados: EmpleadosService,
    public tipoResp: TipoRespSolicitudService,
    public especialidad: EspecialidadService,
    public actSolic: SolicitudService,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.tipoRespSelec = 1;
    this.solicitud = data.solic;   
    console.log(this.solicitud) 
    this.cliente = this.solicitud.nombre + ' ' + this.solicitud.apellido;
    this.servicios = [];
    for(let i=0; i<this.solicitud.servicios_solicitados.length; i++){
      this.servicios.push(this.solicitud.servicios_solicitados)
    }
    this.empleadoM = '';
    this.empleadoP = '';
    this.enviarResp = {
      id_solicitud: this.solicitud.id,
      id_tipo_respuesta_solicitud: null,
      descripcion: ''
    }    
    this.actualizarSolic = {
      estado: this.solicitud.estado,
      empleado_pelu: this.solicitud.empleado_pelu,
      empleado_maqui: this.solicitud.empleado_maqui,
    }
  }
  
  ngOnInit() {    
    this.getEmpleados() ;
    this.getTipoResp();
  }
  getTipoResp(){
    this.tipoResp.getTipoRespSolicitud().subscribe(
      (data)=>{
        this.tipoRespuestas = data['data']
        console.log(this.tipoRespuestas)
      },(error)=>{
        console.log(error)
      }

    )
  }
  getEmpleados(){
    if(this.solicitud.empleado_pelu != null) {
      this.empleadoP = this.solicitud.empleadoP_nombre + ' ' + this.solicitud.empleadoP_apellido
    }
    if(this.solicitud.empleado_maqui != null) {
      this.empleadoM = this.solicitud.empleadoM_nombre + ' ' + this.solicitud.empleadoM_apellido
    }
  }
    responder(){
      this.respuesta.registrarRespSolic(this.enviarResp).subscribe(
        (res)=>{
          console.log('hecho')
          this.actualizarSolic.estado = "R"
          this.actSolic.updateSolicitud(this.solicitud.id, this.actualizarSolic).subscribe(
            (data) => {
              console.log('hecho x 2')
            },(error) =>{
              console.log(error);
            } 
          )
        },(error)=>{
          console.log(error);
        }
      )
    }

  getServiciosSol(){
    console.log(this.solicitud.vista_servicio_solicitado.length)
    for(let i=0; i<this.solicitud.vista_servicio_solicitado.length; i++){
      this.servicios = this.solicitud.vista_servicio_solicitado.tipo_servicio + this.solicitud.vista_servicio_solicitado.nombre
      if (i+1 < this.solicitud.vista_servicio_solicitado.length){
        this.servicios = this.servicios + ', '
      }
      console.log(this.servicios)
    }
  }
}