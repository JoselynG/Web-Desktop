import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


interface TReclamo {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}
interface CategoriaS {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}
interface TRReclamo {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}
interface TComentario {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}
interface TRComentario {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}

interface TCriterio {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}

interface TRPresupuesto {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}
interface TRSolicitud {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}

interface RazonI {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}

interface Unidad {
  Codigo: string;
  nombre: string;
  fechaC: string;
  estatus: string;
}
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  detalles: TReclamo[] = [
    {
      Codigo: '001',
      nombre: 'Reclamo de La Orden ',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Reclamo del Servicio',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];
  tiporeclamos: TRReclamo[] = [
    {
      Codigo: '001',
      nombre: 'Positivaa',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Negativa',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];


  comentarios: TComentario[] = [
    {
      Codigo: '001',
      nombre: 'Sugerencia',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '002',
      nombre: 'Dudas',
      fechaC: '10/04/2018',
      estatus: 'A'
    }

  ];


  Tcomentarios: TRComentario[] = [
    {
      Codigo: '001',
      nombre: 'Positiva',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '002',
      nombre: 'Negativa',
      fechaC: '10/04/2018',
      estatus: 'A'
    }

  ];

  razones: RazonI[] = [
    {
      Codigo: '001',
      nombre: 'Tipo razon de Incidencia A',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Tipo  razon Incidencia  B',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];
  tcriterios: TCriterio[] = [
    {
      Codigo: '001',
      nombre: 'Infraestructura',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'ATención',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];

  TRpresupuestos: TRPresupuesto[] = [
    {
      Codigo: '001',
      nombre: 'Positiva',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Negativa',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];

  TRsolicitudes: TRSolicitud[] = [
    {
      Codigo: '001',
      nombre: 'Falta de Insumos',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Disponibilidad de Empleados ',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];



  categorias: CategoriaS[] = [
    {
      Codigo: '001',
      nombre: 'Peluqueria',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Maquillaje',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  tipos = ['Tipo de Reclamos', 'Tipo de Respuestas a Reclamos', '  Tipo de Comentarios', 'Tipo de Repuestas a Comentarios', ' Razones de Incidencias', 'Tipos de Criterios Para Evaluar Orden de Servicio', 'Tipos de Repuestas a la Solicitudes de Servicios', 'Categorias De Los Servicios a Brindar']

  openDialogCategoria(tipoX): void {

    const dialogRef = this.dialog.open(CrearCategoriaComponent, {
      height: '300px',
      width: '300px',
      data: { modal_tip_reclamo: tipoX }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed!');
    });
  }
}

@Component({
  selector: 'app-crear-tipo-categoria',
  templateUrl: './crear-tipo-categoria.component.html',
  styleUrls: ['./crear-tipo-categoria.component.scss']
})

export class CrearCategoriaComponent implements OnInit {

  tipo_reclamo: string;

  constructor(public dialogRef: MatDialogRef<CrearCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tipo_reclamo = data.modal_tip_reclamo;
  }

  ngOnInit() {
  }

  notOK(): void {
    this.dialogRef.close();
  }

  yesOK() {
    this.dialogRef.close();
  }

}
