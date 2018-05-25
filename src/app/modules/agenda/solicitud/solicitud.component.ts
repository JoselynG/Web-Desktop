import { VistaEmpleadosCategoriaService } from './../../../provider/vista-empleados-categoria/vista-empleados-categoria.service';
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

import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { ActivatedRoute, Router} from '@angular/router';

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
  solicitud: Array<{
    id: number,
    id_cliente: number,
    id_promocion: number,
    nombre: string,
    apellido: string,
    cantidad_servicios: number,
    empleado: Array<{}>,
    servicios_solicitados: Array <{
      id: number,
      id_servicio: number,
      solicitud: number,
      nombre_servicio: string,
      tipo_servicio: string,
    }>,
    empleadoP_nombre: string,
    empleadoM_nombre: string,
    empleadoP_apellido: string,
    empleadoM_apellido: string,
    estado: string,
    empleadoBusqueda:Array<{
      id: number,
      nombre: string,
      apellido: string, 
      cedula: string,
      telefono: string,
      direccion: string,
      fecha_nacimiento: string,
      estatus: string,
      id_ciudad: number,
      id_usuario: number,
      imagen: string,
      sexo: string,
    }>
  }>;
  busqueda:any;
  pendientes: boolean
  solicitudAux: Array<{
    id: number,
    id_cliente: number,
    id_promocion: number,
    nombre: string,
    apellido: string,
    cantidad_servicios: number,
    empleado: Array<{}>,
    servicios_solicitados: Array <{
      id: number,
      id_servicio: number,
      solicitud: number,
      nombre_servicio: string,
      tipo_servicio: string,
    }>,
    empleadoP_nombre: string,
    empleadoM_nombre: string,
    empleadoP_apellido: string,
    empleadoM_apellido: string,
    estado: string,
    empleadoBusqueda:Array<{
      id: number,
      nombre: string,
      apellido: string, 
      cedula: string,
      telefono: string,
      direccion: string,
      fecha_nacimiento: string,
      estatus: string,
      id_ciudad: number,
      id_usuario: number,
      imagen: string,
      sexo: string,
    }>
  }>;
  constructor(
    public dialog: MatDialog,
    public solic: VistaSolicitudService,
    public empleado: EmpleadosService,
    
  ) { 
    this.solicitud = []
     this.pendientes = false
     this.solicitudAux = [{
      id: 0,
      id_cliente: 0,
      id_promocion: 0,
      nombre: '',
      apellido: '',
      empleado: [],
      cantidad_servicios: 0,
      servicios_solicitados: [],
      empleadoP_nombre: '',
      empleadoM_nombre: '',
      empleadoP_apellido: '',
      empleadoM_apellido: '',
      estado: '',
      empleadoBusqueda:[]
    }]
    
  }

  ngOnInit() {
    this.getSolicitud();
  }

  getSolicitud(){
    this.solic.getSolicitud().subscribe(
      (data)=>{
        this.solicitudAux = data ['data'];       
        console.log(this.solicitud.length)
        for(let i = 0; i<this.solicitudAux.length; i++){
          
          if(this.solicitudAux[i].estado === 'P'){
            this.solicitud.push(this.solicitudAux[i])
          }
        }
        if(this.solicitud.length > 0){
          this.pendientes = true
        }

        for(let i = 0; i<this.solicitud.length; i++){
          if(this.solicitud[i].empleado != null){
            this.solicitud[i].empleadoBusqueda=[];
            for(let j=0; j<this.solicitud[i].empleado.length; j++){
              this.empleado.getEmpleadoEspecifico(this.solicitud[i].empleado[j]).subscribe(
                (res) => {
                  this.busqueda=res['data'];
                  this.solicitud[i].empleadoBusqueda.push(this.busqueda);
                },(error) =>{
                  console.log(error)
                }
                )
            }
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
  empleadoP: number;
  empleadoM: number;
  empleadosPeluAux: boolean
  empleadosMaquiAux: boolean
  empleadosBD: any;
  especialidadEmpleado: any;
  enviarResp: {
    id_solicitud: number;
    id_tipo_respuesta_solicitud: number;
    descripcion: string;
  };
  actualizarSolic: {
    estado: string;
    empleado: Array<{}>
  }
  tipoRespuestas: any;
  empleadosPeluq: Array<{
    apellido:"",
    cedula:"",
    direccion:"",
    fecha_nacimiento:"",  
    id:0,
    id_categoria_servicio:0,
    id_empleado:0,
    nombre:"",
    sexo:"",
    telefono:""}>;

  empleadosMaquil: Array<{
    apellido:"",
    cedula:"",
    direccion:"",
    fecha_nacimiento:"",  
    id:0,
    id_categoria_servicio:0,
    id_empleado:0,
    nombre:"",
    sexo:"",
    telefono:""
  }>;
  empleadosCategoria: any;
  catPelu: boolean;
  catMaqui: boolean;
  espec: any;
  
  constructor(public dialogRef: MatDialogRef<ResponderSolicitudComponent>,
    private route: ActivatedRoute,
    public dialog: MatDialog, 
    private router: Router,
    public respuesta: RespuestaSolicitudService,
    public empleados: EmpleadosService,
    public tipoResp: TipoRespSolicitudService,
    public especialidad: EspecialidadService,
    public empleadosCat: VistaEmpleadosCategoriaService,
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
    this.empleadoM = null
    this.empleadoP = null
    this.enviarResp = {
      id_solicitud: this.solicitud.id,
      id_tipo_respuesta_solicitud: null,
      descripcion: ''
    }    
    this.actualizarSolic = {
      estado: this.solicitud.estado,
      empleado:[] 
      
  
    } 
    if(this.solicitud.empleado != null){
      this.actualizarSolic.empleado = this.solicitud.empleado
    } 
    this.empleadosPeluq = []
    this.empleadosMaquil = []
    this.empleadosPeluAux = false
    this.empleadosMaquiAux = false
    this.catMaqui = true
    this.catPelu = true
    this.router.onSameUrlNavigation = 'reload'
  }
  
  ngOnInit() {  
    this.getEmpleadosCat();  
    this.getTipoResp();
    this.getEmpleados();
    
  }

  getEmpleados(){
    if(this.solicitud.empleado.length === 2){
      this.catMaqui = false
      this.catPelu = false
    }else if(this.solicitud.empleado.length === 1){
      this.especialidad.getEspecialidad().subscribe(
        (data)=>{
          this.espec = data['data']
          for(let i = 0; i<this.espec.length; i++){
            if(this.espec[i].id_empleado === this.solicitud.empleado[0]){
              if(this.espec[i].id_categoria_servicio === 1){
                this.catPelu = false
              }else if(this.espec[i].id_categoria_servicio === 2){
                this.catMaqui = false
              }
            }
          }
        }, (error)=>{
          console.log(error)
        }

      )
    }
    
  }

  getEmpleadosCat(){
    
    this.empleadosCat.getEmpleadosCat().subscribe(
      (data)=>{
        this.empleadosCategoria = data['data']       
        for (let i = 0; i < this.empleadosCategoria.length; i++){
          if(this.empleadosCategoria[i].id === 1){
            this.empleadosPeluq=this.empleadosCategoria[i].empleados
            console.log(this.empleadosPeluq)  
          }else{
            this.empleadosMaquil=this.empleadosCategoria[i].empleados
            console.log(this.empleadosMaquil)
          }
        }
      }
    )
  }

  getTipoResp(){
    this.tipoResp.getTipoRespSolicitud().subscribe(
      (data)=>{
        this.tipoRespuestas = data['data']
      },(error)=>{
        console.log(error)
      }

    )
  }
    responder(){
      this.respuesta.registrarRespSolic(this.enviarResp).subscribe(
        (res)=>{
          
          if(this.enviarResp.id_tipo_respuesta_solicitud === 1){
            this.actualizarSolic.estado = 'E'
          }else{
            this.actualizarSolic.estado = 'D'
          }
            if(this.solicitud.empleado === null){
              
                this.actualizarSolic.empleado.push(this.empleadoP)
                this.actualizarSolic.empleado.push(this.empleadoM)
                console.log(this.actualizarSolic)              
            }else {
                if(this.catMaqui){
                  this.actualizarSolic.empleado.push(this.empleadoM)
                }
                if(this.catPelu){
                  this.actualizarSolic.empleado.push(this.empleadoP)
                }
            }

          this.actSolic.updateSolicitud(this.solicitud.id, this.actualizarSolic).subscribe(
            (data) => {
              this.dialogRef.close();
              this.mostrarMensajeExito();
            },(error) =>{
              console.log(error);
            } 
          )
        },(error)=>{
          console.log(error);
        }
      )
    }

mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: 'Respuesta enviada exitosamente' }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['solicitudes']);
    //this.router.onSameUrlNavigation
    
  });  
}

  getServiciosSol(){
    for(let i=0; i<this.solicitud.vista_servicio_solicitado.length; i++){
      this.servicios = this.solicitud.vista_servicio_solicitado.tipo_servicio + this.solicitud.vista_servicio_solicitado.nombre
      if (i+1 < this.solicitud.vista_servicio_solicitado.length){
        this.servicios = this.servicios + ', '
      }
    }
  }
}