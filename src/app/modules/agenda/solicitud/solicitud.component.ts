import { VistaSolicitudService } from './../../../provider/vista-solicitud/vista-solicitud.service';
import { ServicioSolicitadoService } from './../../../provider/servicio-solicitado/servicio-solicitado.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
  solicitud:{
    id: number;
    id_cliente: string;
    id_promocion: string;
    nombre: string;
    apellido: string;
    cantidad_servicios: number;
    empleado_pelu: string;
    empleado_maqui: string;
    vista_servicio_solicitado: {
      id: number;
      id_servicio: number;
      nombre: string;
      tipo_servicio: string;
    };
    empleadoP_nombre: string;
    empleadoM_nombre: string;
    empleadoP_apellido: string;
    empleadoM_apellido: string;
  }
  empleadoSelPelu: any;
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
  ) { }

  ngOnInit() {
    this.getSolicitud();
  }

  getSolicitud(){
    this.solic.getSolicitud().subscribe(
      (data)=>{
        this.solicitud =data['data'];
      },(error) =>{
        console.log(error);
      }
    )
  }
  getEmpleadoPelu(id){    
    this.empleado.getEmpleadoEspecifico(id).subscribe(
      (data)=>{
        this.empleadoSelPelu =data['data'];
      },(error) =>{
        console.log(error);
      }
    )
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