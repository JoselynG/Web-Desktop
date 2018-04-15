import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatDialog } from '@angular/material';

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
  openDialog(){
    const dialogRef = this.dialog.open(CrearServicioComponent, {
      height: '600px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
}


@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {
 //selec crear servicio
  filtroSelec = '';
  filtro = [
    {value: 'peluqueria', viewValue: 'peluqueria'},
    {value: 'maquillale', viewValue: 'maquillaje'},
    
  ];
 // Enter, comma
 separatorKeysCodes = [ENTER, COMMA];

 insumos = [
   { name: 'Champú' },
   { name: 'Tinte' },
   { name: 'Gel' },
 ];

  constructor() { }

  ngOnInit() {
  }

}
