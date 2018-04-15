import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-insumos',
  templateUrl: './lista-insumos.component.html',
  styleUrls: ['./lista-insumos.component.scss']
})
export class ListaInsumosComponent implements OnInit {
  displayedColumns = ['insumo', 'cantidad', 'unidad'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  insumo: string;
  cantidad: string;
  unidad: string;
}

const ELEMENT_DATA: Element[] = [
  { insumo: 'Hydrogen', cantidad: "1.0079", unidad: 'H'},
  { insumo: 'Helium', cantidad: "4.0026", unidad: 'He'},
  { insumo: 'Lithium', cantidad: "6.941", unidad: 'Li'},
  { insumo: 'Beryllium', cantidad: "9.0122", unidad: 'Be'},
  { insumo: 'Boron', cantidad: "10.811", unidad: 'B'},
  { insumo: 'Carbon', cantidad: "12.0107", unidad: 'C'},
  { insumo: 'Nitrogen', cantidad: "14.0067", unidad: 'N'},
  { insumo: 'Oxygen', cantidad: "15.9994", unidad: 'O'},
  { insumo: 'Fluorine', cantidad: "18.9984", unidad: 'F'},
  { insumo: 'Neon', cantidad: "20.1797", unidad: 'Ne'},
  { insumo: 'Sodium', cantidad: "22.9897", unidad: 'Na'},
  { insumo: 'Magnesium', cantidad: "24.305", unidad: 'Mg'},
  { insumo: 'Aluminum', cantidad: "26.9815", unidad: 'Al'},
  { insumo: 'Silicon', cantidad: "28.0855", unidad: 'Si'},
  { insumo: 'Phosphorus', cantidad:" 30.9738", unidad: 'P'},
  { insumo: 'Sulfur', cantidad: "32.065", unidad: 'S'},
  { insumo: 'Chlorine', cantidad:" 35.453", unidad: 'Cl'},
  { insumo: 'Argon', cantidad: "39.948", unidad: 'Ar'},
  { insumo: 'Potassium', cantidad:" 39.0983", unidad: 'K'},
  { insumo: 'Calcium', cantidad:" 40.078", unidad: 'Ca'},
];
  
