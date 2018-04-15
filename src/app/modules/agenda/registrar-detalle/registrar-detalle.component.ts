import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-registrar-detalle',
  templateUrl: './registrar-detalle.component.html',
  styleUrls: ['./registrar-detalle.component.scss']
})
export class RegistrarDetalleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(IncidenciaServicioComponent, {
      height: '400px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
 visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  insumos = [
    { name: 'Champú' },
    { name: 'Tinte' },
    { name: 'Gel' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.insumos.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.insumos.indexOf(fruit);

    if (index >= 0) {
      this.insumos.splice(index, 1);
    }
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