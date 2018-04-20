import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-seguridad-funcional',
  templateUrl: './seguridad-funcional.component.html',
  styleUrls: ['./seguridad-funcional.component.scss']
})
export class SeguridadFuncionalComponent implements OnInit {

  displayedColumns = ['usuario', 'correo', 'telefono', 'rol', 'menu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  usuarios = [
    {value: '1', viewValue: 'Administrador'},
    {value: '2', viewValue: 'Recepcionista'},
    {value: '3', viewValue: 'Estilista'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  usuario: string;
  correo: string;
  telefono: string;
  rol: string;
}

const ELEMENT_DATA: Element[] = [
  {usuario: 'Andrea Gonzalez', correo: "correo@uity",telefono: "041252664654", rol: 'Administrador'},
  {usuario: 'Paul Guedez', correo: "correo@uity",telefono: "041252664654", rol: 'Estilista'},
  {usuario: 'Juan Lopez', correo: "correo@uity",telefono: "041252664654", rol: 'Estilista'},
];

