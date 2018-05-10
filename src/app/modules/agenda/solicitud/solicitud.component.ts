import { ServicioSolicitadoService } from './../../../provider/servicio-solicitado/servicio-solicitado.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolicitudService } from '../../../provider/solicitud/solicitud.service';
import { ClientesService } from '../../../provider/clientes/clientes.service';
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
  datosServSolic: any;
  datosServSolicAux: any;
  datosSolic: any;
  datosCliente: any;
  datosS:{
    descripcion: string;
    servicios: Array<{
        descripcion: string;
    }>
  }
  
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
    public solicitudServ: SolicitudService,
    public servicioSolic: ServicioSolicitadoService,
    public clientes: ClientesService
  ) { }

  ngOnInit() {
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