import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

interface Datos_reclamo{
	nombre: string;
	orden: string;
	fecha: string;
	tipoR: string;
	descripcion: string;
	servicios: servicio[];
	fechaV:string;

}
interface servicio{
  nombre: string;
  descripcion: string;
}
@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.scss']
})
export class SugerenciasComponent implements OnInit {

  datos: Datos_reclamo[]= [
    {
      nombre: 'Maria Anzola',
      orden: '001',
      fecha: '10 abril 2018',
      tipoR: 'Sugerencia',
      descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni architecto necessitatibus exercitationem, quae nam nisi impedit perferendis asperiores recusandae commodi dignissimos, nemo tempora explicabo modi maxime amet, veritatis et autem!',
      servicios: [
      {	nombre:'Tratamiento Keratina',
        descripcion:'wuachu wuachu'
       }
                    
    ],
    fechaV: '20 abril 2018'
    },

    {
        nombre: 'Yanior Zambrano',
        orden: '002',
        fecha: '11 abril 2018',
        tipoR: 'Duda',
        descripcion:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni architecto necessitatibus exercitationem, quae nam nisi impedit perferendis asperiores recusandae commodi dignissimos, nemo tempora explicabo modi maxime amet, veritatis et autem!',
        servicios: [
          {	nombre:'Corte de Cabello',
            descripcion:'Debe fijarse de su corte antes de salir de la peluqueria'
          }                    
        ],
        fechaV: '20 abril 2018'
    }


 ];
 filtroSelec = '';
 filtro = [
  {value: 'todo', viewValue: 'Todos'},
  {value: 'sugerencia', viewValue: 'Sugerencia'},
  {value: 'duda', viewValue: 'Dudas'},
  {value: 'opinion', viewValue: 'Opiniones'},
  {value: 'reclamo', viewValue: 'Reclamos'}
];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    const dialogRef = this.dialog.open( DarRepuestaComentarioComponent, {
      height: '320px',
      width: '400px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
}

@Component({
  selector: 'app-dar-repuesta-comentario',
  templateUrl: './dar-repuesta-comentario.component.html',
  styleUrls: ['./dar-repuesta-comentario.component.scss']
})
export class DarRepuestaComentarioComponent {

//selec pregunta
filtroSelec = '';
filtro = [
  {value: 'positiva', viewValue: 'positiva'},
  {value: 'negativa', viewValue: 'negativa'},
  
];

}