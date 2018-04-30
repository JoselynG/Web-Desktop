import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatDialog, MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.scss']
})
export class ListaServiciosComponent implements OnInit {
  //selec nuevo servicio
  filtroSelec = '';
  filtro = [
    {value: 'peluquria', viewValue: 'peluqueria'},
    {value: 'maquillaje', viewValue: 'maquillaje'},
    {value: 'todos', viewValue: 'todos'}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
}

