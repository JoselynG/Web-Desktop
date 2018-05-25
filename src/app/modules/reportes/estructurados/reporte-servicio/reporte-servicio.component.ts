import { CategoriasServicioService } from './../../../../provider/categorias-servicio/categorias-servicio.service';
import { CategoriaService } from './../../../../provider/categoria/categoria.service';
import { error } from 'util';
import { TiposServiciosService } from './../../../../provider/tipos-servicios/tipos-servicios.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.scss']
})
export class ReporteServicioComponent implements OnInit {
  filtroServCatSelec = 0;
  filtroServTipoPSelec = 'todos';
  filtroServTipoMSelec = 'todos';
  filtroServTipoTodosSelec = 'todos';
  filtroServCat: any;
  filtroServTipoP: Array<{}>;
  filtroServTipoM: Array<{}>;
  filtroTipo: any;
  tipoServicios: any;


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
 
  constructor(
    public categoria: CategoriasServicioService,
    public tipoServ: TiposServiciosService
  ) { }

  ngOnInit() {
    this.getCategorias()
    this.getTipoServ()
  }

  getTipoServ(){
    this.tipoServ.getTipoServicio().subscribe(
      (data) => {
        this.tipoServicios = data ['data']
        console.log(this.tipoServicios)
        for(let i=0; i<this.tipoServicios.length; i++){
          if(this.tipoServicios[i].id_categoria_servicio === 1){
            this.filtroServTipoP.push(this.tipoServicios[i])
          }else{
            this.filtroServTipoM.push(this.tipoServicios[i])
          }
        }        
      }, (error) => {
        console.log(error)
      } ) 
  }

  getFiltroTipo(){
    if(this.filtroServCatSelec === 1){
      this.filtroTipo = this.filtroServTipoP
      console.log(this.filtroTipo)
    }else{
      this.filtroTipo = this.filtroServTipoM
      console.log(this.filtroTipo)
    }
  }


  getCategorias(){
    this.categoria.getCategorias().subscribe(
    (data) => {
      this.filtroServCat = data ['data']
      console.log(this.filtroServCat)
    }, (error) => {
      console.log(error)
    }

    )
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
