import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {
  listaParametro: any[];
  listaValor: any[];
  tipoparametro: any;
    listaTipoParametro: Array<{id_dato: string, nombre: string, status: string, tipo_dato: string }>;

  listaParametros: Array<{id_dato: string, id_parametro: string, nombre: string, tipo: string}>;

  listavalorparametro: Array<{id_valor: string, id_parametro: string, nombre: string, descripcion: string}>;
  constructor() {
    this.listaTipoParametro = [
      {id_dato: '1', nombre: 'Sexo', status: 'a', tipo_dato: 'basico'},
      {id_dato: '2', nombre: 'Rango de edad', status: 'a', tipo_dato: 'basico'},
      {id_dato: '3', nombre: 'Numero de hijos', status: 'a', tipo_dato: 'basico'},
      {id_dato: '4', nombre: 'Rostro', status: 'a', tipo_dato: 'caracteristica'},
      {id_dato: '5', nombre: 'Cabello', status: 'a', tipo_dato: 'caracteristica'},
      {id_dato: '6', nombre: 'Ojos', status: 'a', tipo_dato: 'caracteristica'},
    ];

    this.listaParametros = [
      {id_parametro: '1', id_dato: '1', nombre: 'Hombre', tipo: 'basico'},
      {id_parametro: '2', id_dato: '1', nombre: 'Mujer', tipo: 'basico'},
      {id_parametro: '3', id_dato: '2', nombre: 'Joven', tipo: 'basico'},
      {id_parametro: '4', id_dato: '2', nombre: 'Adulto Mayor', tipo: 'basico'},
      {id_parametro: '5', id_dato: '4', nombre: 'Tipo de rostro', tipo: 'basico'},
      {id_parametro: '6', id_dato: '5', nombre: 'Tipo de cabello', tipo: 'basico'},

    ];

    this.listavalorparametro = [
      {id_valor: '1', id_parametro: '4', nombre: 'Largo', descripcion: 'El rostro es estirado'},
      {id_valor: '1', id_parametro: '4', nombre: 'Redondo', descripcion: 'El redondeado'},
      {id_valor: '1', id_parametro: '5', nombre: 'Ondulado', descripcion: 'su cabello presenta ondas'},
      {id_valor: '1', id_parametro: '5', nombre: 'Crespo', descripcion: 'es un cabello dificil de manejar'},
    ];
  }

  ngOnInit() {

      }
  cargarParametro(id) {
    for (let i = 0; i < this.listaParametros.length; i++) {
      if (this.listaParametros[i].id_dato === id) {
        this.listaParametro.push(this.listaParametros[i]);
      }
    }
  }
  cargarValorParametro(id) {
    for (let i = 0; i < this.listaParametro.length; i++) {
        if (this.listavalorparametro[i].id_parametro === id) {
          this.listaValor.push(this.listavalorparametro);
        }
    }
  }
}
