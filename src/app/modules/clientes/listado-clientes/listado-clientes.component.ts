import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  displayedColumns = ['cliente', 'telefono', 'correo', 'direccion', 'menu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  cliente: string;
  correo: string;
  telefono: string;
  direccion: string;
}

const ELEMENT_DATA: Element[] = [
  {cliente: 'Andrea Gonzalez', telefono: "041252664654", correo: "correo@uity", direccion: 'Hospjgsb jhgds gdj'},
  {cliente: 'Paul Guedez', telefono: "041252664654", correo: "correo@uity", direccion: 'Hospjgsb jhgds gdj'},
  {cliente: 'Juan Lopez', telefono: "041252664654", correo: "correo@uity", direccion: 'Hospjgsb jhgds gdj'},
];

