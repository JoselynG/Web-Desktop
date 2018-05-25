import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TipoIncidenciaService } from '../../../provider/tipo-incidecia/tipo-incidencia.service';
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
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  detalles: Detalle []= [
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'ejecucion',
      icon: true,
      iconName: 'alarm',
      codigo: '#16445-6560'
    },
    {
      clientName: "Khal Drogo",
      servicios: "Baño de color, Marcados",
      empleado: "Qohollo",
      type: 'prestado',
      icon: true,
      iconName: 'check_circle',
      codigo: '#88554-1614'     
    },
    {
      clientName: "Dany Targaryen",
      servicios: "Marcados, Recogidos",
      empleado: "Petra Pérez",
      type: 'programado',
      icon: false,
      codigo: '#94900-2457'     
    },
   
  ];
  filtroSelec = '';
  filtro = [
    {value: 'todo', viewValue: 'Citas desde hoy'},
    {value: 'programado', viewValue: 'Citas pendientes (1)'},
    {value: 'prestado', viewValue: 'Servicios prestados'},
    {value: 'ejecucion', viewValue: 'Servicios en ejecución'}
  ];
  empleadosSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //  this.dataSource.filter = filterValue;
  }
  openDialog(){
    const dialogRef = this.dialog.open(CancelarCitaComponent, {
      height: '600px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
 openDialogIncidencia(){
  const dialogRef = this.dialog.open(IncidenciaCitaComponent, {
    height: '600px',
    width: '500px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado incidencia');
  });
}
}


@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss']
})
export class CancelarCitaComponent  {
  tipo: Array<{
    value: number,
    viewValue: string
  }>
  filtro = [
    {value: 'empleado', viewValue: 'Empleado'},
    {value: 'cliente', viewValue: 'Cliente'},
    {value: 'servicio', viewValue: 'Servicio'},
    
  ];
  incidencia: any;
  constructor(public tipoInc: TipoIncidenciaService){
    this.tipo = []
  } 
  
  ngOnInit() {
    this.getTipoIncidencia();
  }

  getTipoIncidencia(){
    this.tipoInc.getTipoIncidencia().subscribe(
    (data)=>{
      this.incidencia = data['data']
    },(error) => {
      console.log(error);
    }
    )
  }
}

@Component({
  selector: 'app-incidencia-cita',
  templateUrl: './incidencia-cita.component.html',
  styleUrls: ['./incidencia-cita.component.scss']
})
export class IncidenciaCitaComponent  {}
