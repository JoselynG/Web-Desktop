import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
@Component({
  selector: 'app-historico-servicio',
  templateUrl: './historico-servicio.component.html',
  styleUrls: ['./historico-servicio.component.scss']
})
export class HistoricoServicioComponent implements OnInit {
  displayedColumns = ['servicio', 'tipo', 'cantidad','precio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  servicio: string;
  tipo: string;
  cantidad: number;
  precio:number;
}

const ELEMENT_DATA: Element[] = [
  {servicio: 'Mechas', tipo: "Teñido de cabello",  cantidad: 2, precio: 2500},
  {servicio: 'Maquillaje clasico', tipo: "Maquillaje", cantidad: 1, precio: 4000},
  {servicio: 'Alisado con Japones', tipo: "alisado", cantidad: 1, precio: 5067},
];

