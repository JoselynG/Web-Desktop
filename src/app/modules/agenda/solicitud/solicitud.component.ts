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
    vista_servicio_solicitado: Array <{
      id: number;
      id_servicio: number;
      nombre: string;
      tipo_servicio: string;
    }>;
    empleadoP_nombre: string;
    empleadoM_nombre: string;
    empleadoP_apellido: string;
    empleadoM_apellido: string;
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
      vista_servicio_solicitado: [],
      empleadoP_nombre: '',
      empleadoM_nombre: '',
      empleadoP_apellido: '',
      empleadoM_apellido: '',
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
  servicios: string;
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
  }
  
  //valor = false;
  filtro = [
    {value: 1, viewValue: 'Positiva'},
    {value: 2, viewValue: 'Negativa'},
  ];
  constructor(public dialogRef: MatDialogRef<ResponderSolicitudComponent>,
    public respuesta: RespuestaSolicitudService,
    public empleados: EmpleadosService,
    public especialidad: EspecialidadService,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.tipoRespSelec = 1;
    this.solicitud = data.solic;    
    this.cliente = this.solicitud.nombre + ' ' + this.solicitud.apellido;
    this.servicios = '';
    this.servicios = this.solicitud.vista_servicio_solicitado.tipo_servicio + ' ' + this.solicitud.vista_servicio_solicitado.nombre
    console.log(this.solicitud)
    this.empleadoM = '';
    this.empleadoP = '';
    this.enviarResp = {
      id_solicitud: this.solicitud.id,
      id_tipo_respuesta_solicitud: null,
      descripcion: ''
    }
    
  }
  
  ngOnInit() {
    //this.getServiciosSol();
    this.getEmpleados() ;
    this.getEmpleadosPeluSelec();
  }

  getEmpleadosPeluSelec(){
      this.empleados.getEmpleados().subscribe(
        (data =>{
          this.empleadosBD = data['data']
          console.log(this.empleadosBD);
          this.especialidad.getEspecialidad().subscribe(
            (res=>{
              this.especialidadEmpleado = res ['data'];
              for (let i=0;i<this.especialidadEmpleado.length; i++){
                if(this.especialidadEmpleado[i] === 1){
                  this.empleadosPeluAux.push(this.especialidadEmpleado[i])
                  console.log(this.empleadosPelu)
                }else{
                  this.empleadosMaquiAux.push(this.especialidadEmpleado[i])
                  console.log(this.empleadosMaquiAux)
                }
              }

            })
          )
        })
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
        (res=>{
          console.log('hecho')
          
        }),(error)=>{
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