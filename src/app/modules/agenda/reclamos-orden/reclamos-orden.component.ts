import { ReclamoService } from './../../../provider/reclamo/reclamo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TipoRepuestaReclamoService } from '../../../provider/tipo-repuesta-reclamo/tipo-repuesta-reclamo.service';
import { RepuestaReclamoService } from '../../../provider/repuesta-reclamo/repuesta-reclamo.service';
import { VistaReclamoService } from '../../../provider/vista-reclamo/vista-reclamo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';


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
  
  //siempre va eso asi  cambia el nombre de la clase 

  constructor(public dialog: MatDialog,
     public reclamo:VistaReclamoService,
     public repuesta:TipoRepuestaReclamoService,
     private route: ActivatedRoute,
     private router: Router,
 
     ) 
   {
      this.getVistaReclamo();
      
   }

  ngOnInit() {
  this.getVistaReclamo(); 
  
  }
  getVistaReclamo(){
   this.reclamo.getVistaReclamo().subscribe((resp)=>{
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

estadoReclamo: {
  estado: string
}

constructor(public dialog: MatDialog,
  public repuesta:TipoRepuestaReclamoService,
   public repuestaR:RepuestaReclamoService,
   public reclamoServ: ReclamoService,
   private route: ActivatedRoute,
  private router: Router,
  @Inject(MAT_DIALOG_DATA) public data: any
   ) 
{
  console.log(data)
this.getRepuestaReclamo();
this.datosMostrar = {
  id_reclamo: data,
  id_tipo_repuesta_reclamo: 0,
  descripcion:'' ,
  
};


} 

ngOnInit() {

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
    
    this.repuestaR.postRepuestaRec(this.datosMostrar).subscribe((resp)=>{
      this.msj= resp['data'].message;
      if(this.datosMostrar.id_tipo_repuesta_reclamo === 1){
        this.estadoReclamo.estado = 'A'
      }else {
        this.estadoReclamo.estado = 'R'
      }

      this.reclamoServ.updateReclamo(this.datosMostrar.id_reclamo, this.estadoReclamo).subscribe(
        (data) => {
          console.log ('actualizado')
          this.mostrarMensajeExito()
        }
      )
      console.log(this.msj);
       //alert(this.msj)
       
    },(error)=>{
      console.log(error);
    }
   )
  } 

  
mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: 'Respuesta enviada exitosamente' }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['reclamosOrdenes']);
    //this.router.onSameUrlNavigation
    
  });  
}
}
