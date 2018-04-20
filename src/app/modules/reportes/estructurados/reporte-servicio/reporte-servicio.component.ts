import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.scss']
})
export class ReporteServicioComponent implements OnInit {
  filtroServCatSelec = 'todos';
  filtroServTipoPSelec = 'todos';
  filtroServTipoMSelec = 'todos';
  filtroServTipoTodosSelec = 'todos';
  filtroServCat = [
    {value: 'peluqueria', viewValue: 'Peluquería'},
    {value: 'maquillaje', viewValue: 'Maquillaje'},
    {value: 'todos', viewValue: 'Todos'},
  ];

  filtroServTipoP = [
    {value: 'corte', viewValue: 'Corte de Cabello'},
    {value: 'secado', viewValue: 'Secado de Cabello'},
    {value: 'tinte', viewValue: 'Tinte'},
    {value: 'todos', viewValue: 'Todos'},
  ];


  filtroServTipoM = [
    {value: 'dia', viewValue: 'Maquillaje de día'},
    {value: 'noche', viewValue: 'Maquillaje de noche'},
    {value: 'todos', viewValue: 'Todos'},
  ];


  filtroServTipoTodos = [
    {value: 'dia', viewValue: 'Maquillaje de día'},
    {value: 'noche', viewValue: 'Maquillaje de noche'},
    {value: 'corte', viewValue: 'Corte de Cabello'},
    {value: 'secado', viewValue: 'Secado de Cabello'},
    {value: 'tinte', viewValue: 'Tinte'},
    {value: 'todos', viewValue: 'Todos'},
  ];

  displayedColumns = ['servicio', 'tipo', 'categoria', 'cantidad'];
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
  servicio: string;
  tipo: string;
  categoria: string;
  cantidad: number;
}

const ELEMENT_DATA: Element[] = [
  {servicio: 'Corte Bob', tipo: "Corte", categoria: "Peluquería", cantidad: 20},
  {servicio: 'Maquillaje de día con técnica Strobing', tipo: "Maquillaje de día", categoria: "Maquillaje", cantidad: 15},
  {servicio: 'Alisado con Queratina', tipo: "alisado", categoria: "Peluquería", cantidad: 10},
];
