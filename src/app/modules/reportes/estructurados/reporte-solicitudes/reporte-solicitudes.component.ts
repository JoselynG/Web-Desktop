import { VistaServicioCategoriaService } from './../../../../provider/vista-servicio-categoria/vista-servicio-categoria.service';
import { TipoRespPresupuestoService } from './../../../../provider/tipo-resp-presupuesto/tipo-resp-presupuesto.service';
import { TipoRespSolicitudService } from './../../../../provider/tipo-resp-solicitud/tipo-resp-solicitud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ServiciosService } from '../../../../provider/servicios/servicios.service';

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss']
})
export class ReporteSolicitudesComponent implements OnInit {
  TipoRespPresupSelec = '';
  TipoRespSolicSelec = '';
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
  displayedColumns = ['cliente', 'fecha', 'servicio',  'empleado', 'tipoRS', 'respS', 'tipoRP', 'respP'];
  respSolic: any;
  respPresup: any;
  filtroServicio: any;
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
    constructor(
      public tipoRespSolic: TipoRespSolicitudService,
      public TipoRespPresup: TipoRespPresupuestoService,
      public servicios: VistaServicioCategoriaService
    ) { }
  
    ngOnInit() {
      this.getRespSolic()
      this.getRespPresup()
      this.getServicios();
    }
  
    getRespSolic(){
      this.tipoRespSolic.getTipoRespSolicitud().subscribe(
        (data) => {
          this.respSolic = data['data']
        }, (error) => {
          console.log(error)
        }
      )
    }

    getRespPresup(){
      this.TipoRespPresup.getTipoRespPresupuesto().subscribe(
        (data) => {
          this.respPresup = data['data']
        }, (error) => {
          console.log(error)
        }
      )
    }

    getServicios(){
      this.servicios.getServicios().subscribe(
        (data) => {
          this.filtroServicio = data['data']
       
        }, (error) => {
          console.log(error)
        }
      )
    }

  }
  
  export interface Element {
    cliente: string;
    fecha: string;
    servicio: string;
    empleado: string;
    tipoRS: string;
    respS: string;
    tipoRP: string;
    respP: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado', empleado: "lorem", tipoRS: "Negativa", respS: "lorem", tipoRP: "Negativa", respP: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado, tinte', empleado: "lorem", tipoRS: "Positiva", respS: "lorem", tipoRP: "Negativa", respP: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado, Queratina', empleado: "lorem", tipoRS: "Positiva", respS: "lorem", tipoRP: "Negativa", respP: "lorem"},
  ];
  
