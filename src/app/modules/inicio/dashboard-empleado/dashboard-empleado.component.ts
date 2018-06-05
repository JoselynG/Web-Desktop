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
  fecha?: string;
  
}
@Component({
  selector: 'app-dashboard-empleado',
  templateUrl: './dashboard-empleado.component.html',
  styleUrls: ['./dashboard-empleado.component.scss']
})
export class DashboardEmpleadoComponent implements OnInit {
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
   
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    const dialogRef = this.dialog.open(CancelarComponent, {
      height: '600px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
}


@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.scss']
})
export class CancelarComponent  {}