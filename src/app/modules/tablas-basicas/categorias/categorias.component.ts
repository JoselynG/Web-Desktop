import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

interface TReclamo {
  Codigo: string;
  nombre: string;
  descripcion: string;
  fechaC: string;
  estatus: string;
}

interface TComentario {
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

  comentarios:  TComentario [] = [
    {
      Codigo: '001',
      nombre: 'Tipo Comentario A',
      descripcion: 'Tipo comentario relacionado con el espacio de trabajo',
      fechaC: '10/04/2018',
      estatus: 'A'
     } ,
     {
      Codigo: '001',
      nombre: 'Tipo Comentario B',
      descripcion: 'Tipo Comentario de relacionado con el trato de cliente ',
      fechaC: '10/04/2018',
      estatus: 'A'
     } ,
     {
      Codigo: '001',
      nombre: 'Tipo Comentario B',
      descripcion: 'Tipo Reclamo relacionado con espacio',
      fechaC: '10/04/2018',
      estatus: 'A'
     }
     
  ];
   constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogReclamo() {
  const dialogRef = this.dialog.open(CrearTipoReclamoComponent, {
    height: '300px',
    width: '300px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
  });
}


openDialogComentario() {
  const dialogRef = this.dialog.open(CrearTipoComentarioComponent, {
    height: '300px',
    width: '300px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
  });
}
}

@Component({
  selector: 'app-crear-tipo-reclamo',
  templateUrl: './crear-tipo-reclamo.component.html',
  styleUrls: ['./crear-tipo-reclamo.component.scss']
})

export class  CrearTipoReclamoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-crear-tipo-comentario',
  templateUrl: './crear-tipo-comentario.component.html',
  styleUrls: ['./crear-tipo-comentario.component.scss']
})

export class  CrearTipoComentarioComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}