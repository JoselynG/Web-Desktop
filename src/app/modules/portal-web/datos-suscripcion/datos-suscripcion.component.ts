import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-suscripcion',
  templateUrl: './datos-suscripcion.component.html',
  styleUrls: ['./datos-suscripcion.component.scss']
})
export class DatosSuscripcionComponent implements OnInit {
  filtroSelec = 'todos';
  filtro = [
    {value: 'datos', viewValue: 'Datos básicos'},
    {value: 'caracteristicas', viewValue: 'Características'},
    {value: 'gustos', viewValue: 'Gustos y preferencias'},
    {value: 'todos', viewValue: 'Todos'},
  ];
  datos = [
    {value: 'sexo', viewValue: 'Sexo'},
    {value: 'hijos', viewValue: 'Hijos'},
  ];
  caracteristicas = [
    {value: 'cabello', viewValue: 'Tipo de cabello'},
    {value: 'piel', viewValue: 'Tipo de piel'},
    {value: 'color', viewValue: 'Color de ojos'},
  ];
  gustos = [
    {value: 'genero', viewValue: 'Género musical'},
    {value: 'colores', viewValue: 'Colores de tinte'},
    {value: 'color', viewValue: 'Colores de maquillaje'},
  ];
  todos = [
    {value: 'sexo', viewValue: 'Sexo'},
    {value: 'hijos', viewValue: 'Hijos'},
    {value: 'genero', viewValue: 'Género musical'},
    {value: 'colores', viewValue: 'Colores de tinte'},
    {value: 'color', viewValue: 'Colores de maquillaje'},
    {value: 'cabello', viewValue: 'Tipo de cabello'},
    {value: 'piel', viewValue: 'Tipo de piel'},
    {value: 'color', viewValue: 'Color de ojos'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
