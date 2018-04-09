import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-registrar-detalle',
  templateUrl: './registrar-detalle.component.html',
  styleUrls: ['./registrar-detalle.component.scss']
})
export class RegistrarDetalleComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
 
  openDialog(){
    const dialogRef = this.dialog.open(IncidenciaServicioComponent, {
      height: '400px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-incidencia-servicio',
  templateUrl: './incidencia-servicio.component.html',
  styleUrls: ['./incidencia-servicio.component.scss']
})
export class IncidenciaServicioComponent {
  filtro = [
    {value: 'corte', viewValue: 'Corte de cabello'},
    {value: 'tinte', viewValue: 'Aplicación de tinte'},
    
  ];
  constructor(public dialogRef: MatDialogRef<IncidenciaServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
