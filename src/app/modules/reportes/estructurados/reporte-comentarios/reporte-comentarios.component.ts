import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-reporte-comentarios',
  templateUrl: './reporte-comentarios.component.html',
  styleUrls: ['./reporte-comentarios.component.scss']
})
export class ReporteComentariosComponent implements OnInit {
filtroTipoComSelec = 'todos';
filtroTipoRespSelec = 'todos';
filtroTipoCom = [
  {value: 'opinion', viewValue: 'Opiniones'},
  {value: 'queja', viewValue: 'Quejas'},
  {value: 'sugerencia', viewValue: 'Sugerencias'},
  {value: 'dudas', viewValue: 'Dudas'},
  {value: 'todos', viewValue: 'Todos'},
];
filtroTipoResp = [
  {value: 'positiva', viewValue: 'Positiva'},
  {value: 'negativa', viewValue: 'Negativa'},
  {value: 'sin', viewValue: 'Sin responder'},
  {value: 'todos', viewValue: 'Todos'},
];

displayedColumns = ['cliente', 'fecha', 'tipo', 'descripcion', 'tipoR', 'resp'];
dataSource = new MatTableDataSource(ELEMENT_DATA);

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
@ViewChild(MatSort) sort: MatSort;

/**
 * Set the sort after the view init since this component will
 * be able to query its view for the initialized sort.
 */
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}
  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  cliente: string;
  fecha: string;
  tipo: string;
  descripcion: string;
  tipoR: string;
  resp: string;
}

const ELEMENT_DATA: Element[] = [
  {cliente: 'Pepito López', fecha: '05/03/2018', tipo: 'Sugerencia', descripcion: "lorem", tipoR: "Negativa", resp: "lorem"},
  {cliente: 'Pepito López', fecha: '05/03/2018', tipo: 'Opinión', descripcion: "lorem", tipoR: "Positiva", resp: "lorem"},
  {cliente: 'Pepito López', fecha: '05/03/2018', tipo: 'Duda', descripcion: "lorem", tipoR: "Positiva", resp: "lorem"},
];
