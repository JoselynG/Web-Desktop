import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
interface Datos_reclamo{
	nombre: string;
	orden: string;
	fecha: string;
	tipoR: string;
	descripcion: string;
	
	fechaV:string;

}



@Component({
  selector: 'app-reclamos-orden',
  templateUrl: './reclamos-orden.component.html',
  styleUrls: ['./reclamos-orden.component.scss']
})
export class ReclamosOrdenComponent implements OnInit {

  datos: Datos_reclamo[]= [
    {
      nombre: 'Maria Anzola',
      orden: '001',
      fecha: '10 abril 2018',
      tipoR: 'producto',
      descripcion:'El producto que se utilizo cuando me aplicaron tratamiento de keratina, me causó alergia, pido pronta atencion y me regresen mi dinero.',
    
    fechaV: '20 abril 2018'
    },

    {
        nombre: 'Yanior Zambrano',
        orden: '002',
        fecha: '11 abril 2018',
        tipoR: 'servicio',
        descripcion:' Me hicieron mal el corte, me di cuenta al irme de la peluqueria',
        
        fechaV: '20 abril 2018'
    }


 ];
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    const dialogRef = this.dialog.open( DarRepuestaComponent, {
      height: '320px',
      width: '420px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
}


@Component({
  selector: 'app-dar-repuesta',
  templateUrl: './dar-repuesta.component.html',
  styleUrls: ['./dar-repuesta.component.scss']
})
export class DarRepuestaComponent {

//selec pregunta
filtroSelec = '';
filtro = [
  {value: 'positiva', viewValue: 'positiva'},
  {value: 'negativa', viewValue: 'negativa'},
  
];

}