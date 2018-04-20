import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

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
{           nombreTP: 'Cabello',

 Parametros: [
      {	    nombre: '(Tipo Estructura)'
      },
     {	    nombre: '(Emulsión Epicutannia)'

     },
    {	      nombre: '(Color)'
     }
             ],
   },

  {         nombreTP: 'Ojo' ,
            Parametros: [
      {	    nombre: 'Forma',
      },
      {	    nombre: 'Color',
      }
             ],
   },
  {
         nombreTP: 'Cuero Cabelludo',
         Parametros: [
         {nombre: 'xxxxxxx',
         },
         {nombre: 'Xxxxxxxx'}],
    },

      {
             nombreTP: 'Labios',
             Parametros: [
             { nombre: 'Grosor'
             },
             {
               nombre: 'Color' }  ], }
];

valores: Val[] = [
{ valor: 'Normal', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
},
{
  valor: 'Seco',   descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
},
{
  valor: 'Mixto', descrip:  'También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
},
{
  valor: 'Maltratado', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
}
];
 
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  //Modal de Parametro:
openDialogParametro() {
    const dialogRef = this.dialog.open(AgregarParametroComponent, {
      height: '350px',
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
  //Modal de Tipo Parametro
  openDialogTipoParametro() {
    const dialogRef = this.dialog.open(AgregarTipoParametroComponent, {
      height: '350px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
//Modal de Valor Parametro
openDialogValorParametro() {
  const dialogRef = this.dialog.open(AgregarValorParametroComponent, {
    height: '350px',
    width: '350px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
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
  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-crear-nuevo-parametro',
  templateUrl: './crear-nuevo-parametro.component.html',
  styleUrls: ['./crear-nuevo-parametro.component.scss']
})

export class AgregarParametroComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-crear-valor-parametro',
  templateUrl: './crear-valor-parametro.component.html',
  styleUrls: ['./crear-valor-parametro.component.scss']
})

export class AgregarValorParametroComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

