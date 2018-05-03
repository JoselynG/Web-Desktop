import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss']
})
export class ReporteSolicitudesComponent implements OnInit {
  filtroTipoRecSelec = 'todos';
  filtroTipoRespSelec = 'todos';
  filtroTipoRec = [
    {value: 'a', viewValue: 'A'},
    {value: 'b', viewValue: 'B'},
    {value: 'todos', viewValue: 'Todos'},
  ];
  filtroTipoResp = [
    {value: 'positiva', viewValue: 'Positiva'},
    {value: 'negativa', viewValue: 'Negativa'},
    {value: 'sin', viewValue: 'Sin responder'},
    {value: 'todos', viewValue: 'Todos'},
  ];
  
  empleadosSeleccionados = [];
  clientesSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  servicioSeleccionados = [];
  servicios = ['Lavado', 'secado', 'tinte'];
  displayedColumns = ['cliente', 'fecha', 'servicio',  'empleado', 'tipoR', 'resp'];
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
    servicio: string;
    empleado: string;
    tipoR: string;
    resp: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado', empleado: "lorem", tipoR: "Negativa", resp: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado, tinte', empleado: "lorem", tipoR: "Positiva", resp: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado, Queratina', empleado: "lorem", tipoR: "Positiva", resp: "lorem"},
  ];
  
