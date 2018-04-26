import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'Barquisimeto', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Merida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialogO() {
    const dialogRef = this.dialog.open(ObjetivosComponent, {
      height: '350px',
      width: '450px'
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

export class  ObjetivosComponent implements OnInit {


constructor() { }

  ngOnInit() {}

  
}
