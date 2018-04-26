import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.scss']
})
export class AuditoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns = ['position', 'operacion', 'tabla', 'symbol'];
  dataSource = ELEMENT_DATA;


}

export interface Element {
  operacion: string;
  position: number;
  tabla: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, operacion: 'Delete', tabla: 'Servicio', symbol: 'H'},
  {position: 2, operacion: 'Update', tabla: 'Servicio', symbol: 'H'},
  {position: 3, operacion: 'Update', tabla: 'Cliente', symbol: 'H'},
  {position: 4, operacion: 'Delete', tabla: 'Solicitud', symbol: 'H'},
  {position: 5, operacion: 'Insert', tabla: 'Servicio', symbol: 'H'},
  {position: 6, operacion: 'Delete', tabla: 'Solicitud', symbol: 'H'},
  {position: 7, operacion: 'Insert', tabla: 'Cliente', symbol: 'H'},
  {position: 8, operacion: 'Insert', tabla: 'Solicitud', symbol: 'H'},
  {position: 9, operacion: 'Delete', tabla: 'Solicitud', symbol: 'H'},
  {position: 10, operacion: 'Update', tabla: 'Cliente', symbol: 'H'},
  {position: 11, operacion: 'Delete', tabla: 'Reclamo', symbol: 'H'},
  {position: 12, operacion: 'Delete', tabla: 'Reclamo', symbol: 'H'},
  {position: 13, operacion: 'Insert', tabla: 'Cliente', symbol: 'He'},
  {position: 14, operacion: 'Update', tabla: 'Empleado', symbol: 'Li'},
  {position: 15, operacion: 'Insert', tabla: 'Empleado', symbol: 'Be'},
];
