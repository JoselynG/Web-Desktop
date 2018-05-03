import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


interface Datos_reclamo{
	nombre: string;
	orden: string;
	fecha: Date;
	tipoR: string;
	descripcion: string;
	
	fechaV:Date;

}



@Component({
  selector: 'app-reclamos-orden',
  templateUrl: './reclamos-orden.component.html',
  styleUrls: ['./reclamos-orden.component.scss']
})
export class ReclamosOrdenComponent implements OnInit {
 hoy= new Date();
  datos: Datos_reclamo[]= [
    {
      nombre: 'Maria Anzola',
      orden: '001',
      fecha: new Date('2018/04/10'),
      tipoR: 'producto',
      descripcion:'El producto que se utilizo cuando me aplicaron tratamiento de keratina, me causó alergia, pido pronta atencion y me regresen mi dinero.',
    
    fechaV: new Date('2018/04/20')
    },

    {
        nombre: 'Yanior Zambrano',
        orden: '002',
        fecha: new Date('2018/04/11'),
        tipoR: 'servicio',
        descripcion:' Me hicieron mal el corte, me di cuenta al irme de la peluqueria',
        
        fechaV: new Date('2018/05/20')
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
  {value: 'positiva', viewValue: 'Procede'},
  {value: 'negativa', viewValue: 'No procede'},
  
];

}