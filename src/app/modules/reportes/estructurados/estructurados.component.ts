import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-estructurados',
  templateUrl: './estructurados.component.html',
  styleUrls: ['./estructurados.component.scss']
})
export class EstructuradosComponent implements OnInit {
  filtroSelec = 'servicio';
  filtro = [
    {value: 'servicio', viewValue: 'Servicios'},
    {value: 'solicitud', viewValue: 'Solicitudes'},
    {value: 'reclamos', viewValue: 'Reclamos'},
    {value: 'Clientes', viewValue: 'Clientes'},
    {value: 'incidenciasO', viewValue: 'Incidencias Orden'},
    {value: 'incidenciasS', viewValue: 'Incidencias Servicios'},
    {value: 'comentarios', viewValue: 'Comentarios'},
  ];
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
