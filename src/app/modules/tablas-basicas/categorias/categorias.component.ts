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
  Tipodereclamos: TReclamo[] = [
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
  Tipoderespuestasareclamos: TRReclamo[] = [
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


  Tipodecomentarios: TComentario[] = [
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


  Tipoderepuestasacomentarios: TRComentario[] = [
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

  Razondeincidencia: RazonI[] = [
    {
      Codigo: '001',
      nombre: 'Tipo razon de Incidencia A',
      fechaC: '10/04/2018',
      estatus: 'A'
    },
    {
      Codigo: '001',
      nombre: 'Tipo razon Incidencia  B',
      fechaC: '10/04/2018',
      estatus: 'A'
    }];
  Tiposdecriteriosparaevaluarordendeservicio: TCriterio[] = [
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

  Tipoderespuestaapresupuesto: TRPresupuesto[] = [
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

    Tiposderepuestasalasolicitudesdeservicios: TRSolicitud[] = [
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



  Categoriasdelosserviciosabrindar: CategoriaS[] = [
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

    Tipodeincidencia = [
      {
        Codigo: '001',
        Codigo_dependencia: '001',
        nombre: 'Tipo incidencia A',
        fechaC: '10/04/2018',
        estatus: 'A'
      },
      {
        Codigo: '002',
        Codigo_dependencia: '002',
        nombre: 'Tipo incidencia B',
        fechaC: '10/04/2018',
        estatus: 'A'
      }];

      Tipodeservicio = [
        {
          Codigo: '001',
          Codigo_dependencia: '001',
          nombre: 'Tipo de servicio A',
          fechaC: '10/04/2018',
          estatus: 'A'
        },
        {
          Codigo: '002',
          Codigo_dependencia: '002',
          nombre: 'Tipo de servicio B',
          fechaC: '10/04/2018',
          estatus: 'A'
        }];

  optionToLoadList: any;
  showList: Boolean = false;
  showListDependant: Boolean = false;
  optionDependantToLoadList: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  chargeList(tipo) {

    if (tipo == this.tipos[0]) {
      this.optionToLoadList = this.Tipodereclamos;
    } else if (tipo == this.tipos[1]) {
      this.optionToLoadList = this.Tipoderespuestasareclamos;
    } else if (tipo == this.tipos[2]) {
      this.optionToLoadList = this.Tipodecomentarios;
    } else if (tipo == this.tipos[3]) {
      this.optionToLoadList = this.Tipoderepuestasacomentarios;
    } else if (tipo == this.tipos[4]) {
      this.optionToLoadList = this.Razondeincidencia;
    } else if (tipo == this.tipos[5]) {
      this.optionToLoadList = this.Tiposdecriteriosparaevaluarordendeservicio;
    } else if (tipo == this.tipos[6]) {
      this.optionToLoadList = this.Tiposderepuestasalasolicitudesdeservicios;
    } else if (tipo == this.tipos[7]) {
      this.optionToLoadList = this.Categoriasdelosserviciosabrindar;
    } else if (tipo == this.tipos[8]) {
      this.optionToLoadList = this.Tipoderespuestaapresupuesto;
    }
    this.showList = true;
  }
  tipoSelected: any;
  chargeListDependant(tipo) {
    this.tipoSelected = tipo;
    if (tipo == this.tiposDependientes[0]) {
      this.optionDependantToLoadList = this.Tipodeincidencia;
    } else if (tipo == this.tiposDependientes[1]) {
      this.optionDependantToLoadList = this.Tipodeservicio;
    }
    this.showListDependant = true;
  }
  tipos = ['Tipo de reclamos', 'Tipo de respuestas a reclamos', 'Tipo de comentarios', 'Tipo de repuestas a comentarios', 'Razon de incidencia', 'Tipos de criterios para evaluar orden de servicio', 'Tipos de repuestas a la solicitudes de servicios', 'Categorias de los servicios a brindar', 'Tipo de respuesta a presupuesto']
  tiposDependientes = ['Tipo de incidencia', 'Tipo de servicio'];
  openDialogCategoria(tipoX): void {
    const dialogRef = this.dialog.open(CrearCategoriaComponent, {
      data: { modal_tip_reclamo: tipoX }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed!');
    });
  }

  selectDependant: any;
openDialogCategoriaDependiente(tipoX): void {
  if (this.tipoSelected == 'Tipo de incidencia') {
    this.selectDependant = this.Tipodeincidencia;
  } else {
    this.selectDependant = this.Tipodeservicio;
  }
  const dialogRef = this.dialog.open(CrearCategoriaDependienteComponent, {
    data: { modal_tip_reclamo: this.selectDependant }
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

@Component({
  selector: 'app-crear-tipo-categoria-dependiente',
  templateUrl: './crear-tipo-categoria-dependiente.component.html',
  styleUrls: ['./crear-tipo-categoria-dependiente.component.scss']
})
export class CrearCategoriaDependienteComponent implements OnInit {

  tipo_reclamo: string;

  constructor(public dialogRef: MatDialogRef<CrearCategoriaDependienteComponent>,
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
