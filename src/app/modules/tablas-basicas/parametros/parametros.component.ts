import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface TipoParametro {
  nombreTP: string;
  Parametros: Tpa[];
}

interface Val {
  valor: string;
  descrip: string;
}
interface Tpa {
  nombre: string;

}
@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {
  panelOpenState = true;

  datos: TipoParametro[] = [
    {
      nombreTP: 'Cabello',

      Parametros: [
        {
          nombre: 'Longitud'
        },
        {
          nombre: 'Color'

        },
        {
          nombre: 'Forma'
        },
        {
          nombre: 'Tipo'
        }
      ],
    },

    {
      nombreTP: 'Ojos',
      Parametros: [
        {
          nombre: 'Forma',
        },
        {
          nombre: 'Color',
        }
      ],
    },
    {
      nombreTP: 'Cuero Cabelludo',
      Parametros: [
        {
          nombre: 'Tipo',
        },
        { nombre: 'Textura' }],
    },

    {
      nombreTP: 'Labios',
      Parametros: [
        {
          nombre: 'Forma'
        },
        {
          nombre: 'Tipo'
        },
        {
          nombre: 'Color'
        }],
    }
  ];

  valores: Val[] = [
    {
      valor: 'Normal', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
    },
    {
      valor: 'Seco', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
    },
    {
      valor: 'Mixto', descrip: 'También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
    },
    {
      valor: 'Maltratado', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
    }
  ];
  caracteristicaLoad: String[] = [];
  valoresToLoad: any;
  showCaracteristica: Boolean = false;
  parametrosSelect: String[] = [];
  showValores: Boolean = false;
  constructor(public dialog: MatDialog) {
    this.configurarValoresParametro();
  }

  configurarValoresParametro() {
    let nombreSelect: String;
    for (let item of this.datos) {
      nombreSelect = '';
      for (let ite of item.Parametros) {
        nombreSelect = item.nombreTP + ': ' + ite.nombre;
        this.parametrosSelect.push(nombreSelect);
      }
    }
  }

  cargarListaCaracteristica(nombre) {
    this.showCaracteristica = true;
    if (nombre == 'Cabello') {
      this.caracteristicaLoad = ['Longitud', 'Color', 'Forma', 'Tipo'];
    } else if (nombre == 'Ojos') {
      this.caracteristicaLoad = ['Forma', 'Color'];
    } else if (nombre == 'Cuero Cabelludo') {
      this.caracteristicaLoad = ['Tipo', 'Textura'];
    } else if (nombre == 'Labios') {
      this.caracteristicaLoad = ['Forma', 'Color', 'Tipo'];
    }
  }

 cleanLists() {
  this.showCaracteristica = false;
  this.showValores= false;
 }

  cargarListaValores(nombre) {
    this.showValores = true;
    console.log(nombre);
    if (nombre == this.parametrosSelect[0]) {
      this.valoresToLoad = [{nombre: 'Corto', descripcion:'xxxxx'}, {nombre: 'Medio', descripcion:'xxxxx'}, {nombre: 'Largo', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[1]) {
      this.valoresToLoad = [{nombre: 'Castaño', descripcion:'xxxxx'}, {nombre: 'Rubio', descripcion:'xxxxx'}, {nombre: 'Pelirrojo', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[2]) {
      this.valoresToLoad = [{nombre: 'Ondulado', descripcion:'xxxxx'}, {nombre: 'Liso', descripcion:'xxxxx'}, {nombre: 'Rizado', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[3]) {
      this.valoresToLoad = [{nombre: 'Graso', descripcion:'xxxxx'}, {nombre: 'Seco', descripcion:'xxxxx'}, {nombre: 'Mixto', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[4]) {
      this.valoresToLoad = [{nombre: 'Grandes', descripcion:'xxxxx'}, {nombre: 'Pequeños', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[5]) {
      this.valoresToLoad = [{nombre: 'Azules', descripcion:'xxxxx'}, {nombre: 'Marrones', descripcion:'xxxxx'}, {nombre: 'Verdes', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[6]) {
      this.valoresToLoad = [{nombre: '1', descripcion:'xxxxx'}, {nombre: '2', descripcion:'xxxxx'}, {nombre: '3', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[7]) {
      this.valoresToLoad = [{nombre: '1', descripcion:'xxxxx'}, {nombre: '2', descripcion:'xxxxx'}, {nombre: '3', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[8]) {
      this.valoresToLoad = [{nombre: 'Gruesos', descripcion:'xxxxx'}, {nombre: 'Delgados', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[9]) {
      this.valoresToLoad = [{nombre: 'Rosados', descripcion:'xxxxx'}, {nombre: 'Marrones', descripcion:'xxxxx'}];
    } else if (nombre == this.parametrosSelect[10]) {
      this.valoresToLoad = [{nombre: 'Resecos', descripcion:'xxxxx'}, {nombre: 'Humectados', descripcion:'xxxxx'}];
    }

  }

  ngOnInit() {
  }
  //Modal de Parametro:
  openDialogParametro() {
    const dialogRef = this.dialog.open(AgregarParametroComponent, {
      height: '350px',
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  //Modal de Tipo Parametro
  openDialogTipoParametro() {
    const dialogRef = this.dialog.open(AgregarTipoParametroComponent, {
      height: '350px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  //Modal de Valor Parametro
  openDialogValorParametro() {
    const dialogRef = this.dialog.open(AgregarValorParametroComponent, {
      height: '380px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
//Componentes Para cada Agregar:
@Component({
  selector: 'app-crear-tipo-parametro',
  templateUrl: './crear-tipo-parametro.component.html',
  styleUrls: ['./crear-tipo-parametro.component.scss']
})
export class AgregarTipoParametroComponent implements OnInit {
  category = new FormControl();
  categoryList = ['Peluquería', 'Maquillaje'];
  constructor(public dialogRef: MatDialogRef<AgregarTipoParametroComponent>) {
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
  selector: 'app-crear-nuevo-parametro',
  templateUrl: './crear-nuevo-parametro.component.html',
  styleUrls: ['./crear-nuevo-parametro.component.scss']
})

export class AgregarParametroComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AgregarParametroComponent>) {
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
  selector: 'app-crear-valor-parametro',
  templateUrl: './crear-valor-parametro.component.html',
  styleUrls: ['./crear-valor-parametro.component.scss']
})

export class AgregarValorParametroComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AgregarValorParametroComponent>) {
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

