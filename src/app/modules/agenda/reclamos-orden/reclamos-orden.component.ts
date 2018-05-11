import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReclamoService } from '../../../provider/reclamo/reclamo.service';
import { TipoRepuestaReclamoService } from '../../../provider/tipo-repuesta-reclamo/tipo-repuesta-reclamo.service';
import { RepuestaReclamoService } from '../../../provider/repuesta-reclamo/repuesta-reclamo.service';


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
  //siempre va
 rec: any;
 
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
  
  //siempre va eso asi  cambia el nombre de la clase 

  constructor(public dialog: MatDialog, public reclamo: ReclamoService,public repuesta:TipoRepuestaReclamoService ) 
   {
      this.getReclamo();
      
   }

  ngOnInit() {
  this.getReclamo(); 
  
  }
  getReclamo(){
   this.reclamo.getReclamo().subscribe((resp)=>{
     this.rec= resp['data'];
     console.log(this.rec);

   },(error)=>{
     console.log(error);
   }
  )
}

  openDialog(id){
    console.log(id);
    this.repuesta.setIdReclamo(id);
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
  resp:any[]; 
  respuestarec:any;
  msj:string;
//selec pregunta
filtroSelec = '';
filtro = [
  {value: 'positiva', viewValue: 'Procede'},
  {value: 'negativa', viewValue: 'No procede'},
  
];
datosMostrar: {
  id_reclamo: number,
  id_tipo_repuesta_reclamo: number,
  descripcion: String,
};

constructor(public dialog: MatDialog,public repuesta:TipoRepuestaReclamoService, public repuestaR:RepuestaReclamoService ) 
{
this.getRepuestaReclamo();

}

  

ngOnInit() {
  this.datosMostrar = {
    id_reclamo: 0,
    id_tipo_repuesta_reclamo: 0,
    descripcion:`` ,
    
  };

}
  getRepuestaReclamo(){
    this.repuesta.getRepuestaReclamo().subscribe((resp)=>{
      this.resp= resp['data'];
      console.log(this.resp);
  
    },(error)=>{
      console.log(error);
    }
   )
  }
  
  
  //guardar
  postRepuestaRec() {
    this.datosMostrar.id_reclamo=this.repuesta.returnIdReclamo();
    console.log(this.datosMostrar);
    this.repuestaR.postRepuestaRec(this.datosMostrar).subscribe((resp)=>{
      this.msj= resp['data'].message;
      console.log(this.msj);
       alert(this.msj)
    },(error)=>{
      console.log(error);
    }
   )
  } 
}
