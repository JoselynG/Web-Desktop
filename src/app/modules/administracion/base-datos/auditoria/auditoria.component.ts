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
  displayedColumns = ['position', 'fecha', 'operacion', 'tabla', 'registro','usuario'];
  dataSource = ELEMENT_DATA;


}

export interface Element {
  fecha: string;
  operacion: string;
  position: number;
  tabla: string;
  registro: number;
  usuario: string;
}

const ELEMENT_DATA: Element[] = [
  {fecha: '12/09/2017',position: 1, operacion: 'Delete', tabla: 'Servicio', registro: 1, usuario: 'Laurymar'},
  {fecha: '12/08/2017',position: 2, operacion: 'Update', tabla: 'Servicio', registro: 3, usuario: 'Sohecdy'},
  {fecha: '12/08/2017',position: 3, operacion: 'Update', tabla: 'Cliente', registro: 7, usuario: 'Joselyn'},
  {fecha: '12/08/2017',position: 4, operacion: 'Delete', tabla: 'Solicitud', registro: 9, usuario: 'Nathali'},
  {fecha: '12/07/2017',position: 5, operacion: 'Insert', tabla: 'Servicio', registro: 6, usuario: 'Ricardo'},
  {fecha: '12/07/2017',position: 6, operacion: 'Delete', tabla: 'Solicitud', registro: 6, usuario: 'Vaamonde'},
  {fecha: '12/07/2017',position: 7, operacion: 'Insert', tabla: 'Cliente', registro: 8, usuario: 'Alfredo'},
  {fecha: '12/06/2017',position: 8, operacion: 'Insert', tabla: 'Solicitud', registro: 4, usuario: 'Ricardo'},
  {fecha: '10/06/2017',position: 9, operacion: 'Delete', tabla: 'Solicitud', registro: 8, usuario: 'Ricardo'},
  {fecha: '09/06/2017',position: 10, operacion: 'Update', tabla: 'Cliente', registro: 34, usuario: 'Ricardo'},
  {fecha: '08/06/2017',position: 11, operacion: 'Delete', tabla: 'Reclamo', registro: 78, usuario: 'Ricardo'},
  {fecha: '07/06/2017',position: 12, operacion: 'Delete', tabla: 'Reclamo', registro: 90, usuario: 'Ricardo'},
  {fecha: '06/06/2017',position: 13, operacion: 'Insert', tabla: 'Cliente', registro: 45, usuario: 'Ricardo'},
  {fecha: '05/06/2017',position: 14, operacion: 'Update', tabla: 'Empleado', registro: 56, usuario: 'Ricardo'},
  {fecha: '04/06/2017',position: 15, operacion: 'Insert', tabla: 'Empleado', registro: 94, usuario: 'Ricardo'},
];
