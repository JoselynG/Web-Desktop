
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

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
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '    #16445-6560',
      fecha: '21 Jul 2018'
    },
  ];
  filtroSelec = '';
  filtro = [
    {value: 'solicitud', viewValue: 'Solicitudes'},
    {value: 'todo', viewValue: 'Citas desde hoy'},
    {value: 'programado', viewValue: 'Citas pendientes (1)'},
    {value: 'prestado', viewValue: 'Servicios prestados'},
    {value: 'ejecucion', viewValue: 'Servicios en ejecución'}
  ];
  empleadosSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
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
openDialogResponder(){
  const dialogRef = this.dialog.open(ResponderSolicitudComponent, {
    height: '600px',
    width: '500px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado incidencia');
  });}
  openDialogNuevo(){
    const dialogRef = this.dialog.open(NuevaCitaComponent, {
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
    this.show = false;
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
@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.component.html',
  styleUrls: ['./nueva-cita.component.scss']
})
export class NuevaCitaComponent  {
  empleadosSeleccionados = [];
  empleadosSeleccionadosP = [];
  serviciosPeluSeleccionados = [];
  serviciosMaqSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  serviciosPelu = ['Corte de Cabello', 'Secado', 'Planchado', 'keratina', 'Peinado', 'Tinte', 'Mechas', 'Lavado', 'otros'];
  serviciosMaq = ['Maquillaje de noche', 'Maquillaje de día', 'Cejas', 'otros'];
  constructor(public dialogRef: MatDialogRef<NuevaCitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
}