
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

interface Detalle{
  clientName: string;
  servicios: string;
  empleado: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
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
  filtro = [
    {value: 'todo', viewValue: 'Todo desde hoy'},
    {value: 'citas', viewValue: 'Citas pendientes (1)'},
    {value: 'servicios', viewValue: 'Servicios prestados'}
  ];

  constructor(public dialog: MatDialog) {}
 
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
 
show: boolean;

mostrar(){
  if (this.show){
    this.show = false;
    console.log('mostrar');
  }
  else{
    this.show = true;
    console.log('ocultar');
  }
}

  ngOnInit() {
    this.show=false;
  }

}

@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss']
})
export class CancelarCitaComponent  {}

@Component({
  selector: 'app-incidencia-cita',
  templateUrl: './incidencia-cita.component.html',
  styleUrls: ['./incidencia-cita.component.scss']
})
export class IncidenciaCitaComponent  {}