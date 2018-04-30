import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-historico-promocion',
  templateUrl: './historico-promocion.component.html',
  styleUrls: ['./historico-promocion.component.scss']
})
export class HistoricoPromocionComponent implements OnInit {
  displayedColumns = ['nombre','descripcion', 'descuento'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  nombre: string;
  descripcion: string;
  descuento: string;
  
}

const ELEMENT_DATA: Element[] = [
  {nombre: "Madres Felices", descripcion: 'Descuento en corte de cabello', descuento: "50%"},
  {nombre: "Vacaciones con Glamour", descripcion: 'Descuento de depilacion de cejas', descuento: "35%"},
  {nombre: "Promoción San Valentin", descripcion: 'Peinados causales en descuento', descuento: "20%"},
];

