import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
openDialogEditar(){
    const dialogRef = this.dialog.open(EditarTipoServicioComponent, {
      height: '350px',
      width: '450px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  
  }
  openDialog(){
    const dialogRef = this.dialog.open(CrearTipoServicioComponent, {
      height: '350px',
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
}

@Component({
  selector: 'app-crear-tipo-servicio',
  templateUrl: './crear-tipo-servicio.component.html',
  styleUrls: ['./crear-tipo-servicio.component.scss']
})
export class CrearTipoServicioComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-editar-tipo-servicio',
  templateUrl: './editar-tipo-servicio.component.html',
  styleUrls: ['./editar-tipo-servicio.component.scss']
})
export class EditarTipoServicioComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
