import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";//Required for showing up the modal

@Component({
  selector: 'app-mensaje-exito',
  templateUrl: './mensaje-exito.component.html',
  styleUrls: ['./mensaje-exito.component.scss']
})
export class MensajeExitoComponent implements OnInit {

  mensaje:string;

  constructor(public dialogRef: MatDialogRef<MensajeExitoComponent>,//,for sending inf to the parent component
    @Inject(MAT_DIALOG_DATA) public data: any) { //for adquiring data from the parent component
      /*instanciating modal's attributes by parent's attributes*/
      this.mensaje=data.msj;
  }

  ngOnInit() {
  }

  onOK(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

}
