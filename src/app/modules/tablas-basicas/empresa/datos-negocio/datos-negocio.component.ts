import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-datos-negocio',
  templateUrl: './datos-negocio.component.html',
  styleUrls: ['./datos-negocio.component.scss']
})
export class DatosNegocioComponent implements OnInit {
//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'Barquisimeto', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Mérida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
estado = [
  {value: 'Lara', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Mérida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CrearObjetivosComponent, {
      height: '300px',
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
}





@Component({
  selector: 'app-crear-objetivos',
  templateUrl: './crear-objetivos.component.html',
  styleUrls: ['./crear-objetivos.component.scss']
})

export class  CrearObjetivosComponent implements OnInit {

  filtro = [
    {value: 'gral', viewValue: 'General'},
    {value: 'esp', viewValue: 'Específicos'},
    
    
  ];
constructor() { }

  ngOnInit() {}

  
}
