import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

interface TReclamo {
  Codigo: string;
  nombre: string;
  descripcion: string;
  fechaC: string;
  estatus: string;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  detalles:  TReclamo [] = [
    {
      Codigo: '001',
      nombre: 'Tipo Reclamo A',
      descripcion: 'Tipo Reclamo de la garantia',
      fechaC: '10/04/2018',
      estatus: 'A'
     } ,
     {
      Codigo: '001',
      nombre: 'Tipo Reclamo B',
      descripcion: 'Tipo Reclamo de la garantia',
      fechaC: '10/04/2018',
      estatus: 'A'
     } ,
     {
      Codigo: '001',
      nombre: 'Tipo Reclamo B',
      descripcion: 'Tipo Reclamo de la garantia',
      fechaC: '10/04/2018',
      estatus: 'A'
     }
  ];
   constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogEditar() {
  const dialogRef = this.dialog.open(EditarTipoReclamoComponent, {
    height: '300px',
    width: '300px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
  });
}
}

@Component({
  selector: 'app-editar-tipo-reclamo',
  templateUrl: './editar-tipo-reclamo.component.html',
  styleUrls: ['./editar-tipo-reclamo.component.scss']
})

export class  EditarTipoReclamoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
