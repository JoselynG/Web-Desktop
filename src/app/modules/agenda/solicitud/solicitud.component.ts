
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
  empleadoSelPelu: any;
  empleadoSelMaq: any;
  empleadosSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  detalles: Detalle []= [
    {
      clientName: "Dany Targaryen",
      servicios: "Marcados, Recogidos",
      empleado: "Petra Pérez",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '#94900-2457'     
    },
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '    #16445-6560',
    },
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '    #16445-6560',
    },
  ];
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
          console.log(this.solicitud[i])
          if(this.solicitud[i].empleado_pelu != null){
            this.empleado.getEmpleadoEspecifico(this.solicitud[i].empleado_pelu).subscribe(
              (data)=>{
                this.empleadoSelP =data['data'];
                console.log(this.empleadoSelP)
                this.solicitud[i].empleadoP_nombre = this.empleadoSelP.nombre;
                //console.log(this.solicitud[i].empleadoP_nombre )
                this.solicitud[i].empleadoP_apellido = this.empleadoSelP.apellido;    
               console.log("es aqui")
                console.log(this.solicitud)
              },(error) =>{
                console.log(error);
              }
            );
            /*console.log(this.empleadoSelPelu)
            this.solicitud[i].empleadoP_nombre = this.empleadoSelPelu.nombre;
            this.solicitud[i].empleadoP_apellido = this.empleadoSelPelu.apellido;*/
          }
          if(this.solicitud[i].empleado_maqui != null){
            this.empleado.getEmpleadoEspecifico(this.solicitud[i].empleado_maqui).subscribe(
              (data)=>{
                this.empleadoSelM =data['data'];
                console.log(this.empleadoSelM)
        
                  this.solicitud[i].empleadoM_nombre = this.empleadoSelM.nombre;
                  this.solicitud[i].empleadoM_apellido = this.empleadoSelM.apellido; 
                  console.log(this.solicitud)
              },(error) =>{
                console.log(error);
              }
            );
            /*this.getEmpleadoMaq(this.solicitud[i].empleado_maqui)
            this.solicitud[i].empleadoM_nombre = this.empleadoSelMaq.nombre;
            this.solicitud[i].empleadoM_apellido = this.empleadoSelMaq.apellido; */
          }
        }
      },(error) =>{
        console.log(error);
      }
    )
    
  }
  getEmpleadoPelu(id){    
    this.empleado.getEmpleadoEspecifico(id).subscribe(
      (data)=>{
        this.empleadoSelPelu =data['data'];
        console.log(this.empleadoSelPelu)
      },(error) =>{
        console.log(error);
      }
    );
  }
  getEmpleadoMaq(id){    
    this.empleado.getEmpleadoEspecifico(id).subscribe(
      (data)=>{
        this.empleadoSelMaq =data['data'];
      },(error) =>{
        console.log(error);
      }
    );
  }
  
  openDialogResponder(){
    const dialogRef = this.dialog.open(ResponderSolicitudComponent, {
      height: '600px',
      width: '500px'
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
  
  //filtroControl = new FormControl('', [Validators.required]);
  valor = false;
  filtro = [
    {value: false, viewValue: 'Positiva'},
    {value: true, viewValue: 'Negativa'},
  ];
}