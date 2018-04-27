import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-estilistas',
  templateUrl: './estilistas.component.html',
  styleUrls: ['./estilistas.component.scss']
})
export class EstilistasComponent implements OnInit {

  usuarios = new FormControl();

  lista_usuarios = [{nombre:'Joanne',apellido:'Marin',descripcion:'Profesional reconocido en el mundo de la estetica y belleza, apasionada en lo que hace, y siempre actuando en pro a la satisfaccion del cliente.'}, 
  {nombre:'Delia',apellido:'Alvarado',descripcion:'Clientes satisfechos, esa es la meta. Profesional dedicada 100% a lo que hago, no soy perfecta, pero se hace el intento.'},
  {nombre:'Susette',apellido:'Puleau',descripcion:'El mundo de la belleza es tan bello que me quedo en él. Simpre dando lo mejor para cumplir con las espectativas del cliente.'},
  {nombre:'Amanda',apellido:'Moreno',descripcion:'Profesional reconocido en el mundo de la estetica y belleza, apasionada en lo que hace, y siempre actuando en pro a la satisfaccion del cliente.'},
];

  constructor() { }

  ngOnInit() {
  }

}
