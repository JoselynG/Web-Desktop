import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-base-datos',
  templateUrl: './base-datos.component.html',
  styleUrls: ['./base-datos.component.scss']
})
export class BaseDatosComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open("Datos cargados exitosamente!","", {
      duration: 3000,
    });
  }

}
