import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComentarioService } from '../../../provider/comentario/comentario.service';
import { TipoComentarioService } from '../../../provider/tipo-comentario/tipo-comentario.service';
import { TipoRepuestaComentarioService } from '../../../provider/tipo-repuesta-comentario/tipo-repuesta-comentario.service';
import { RespuestaComentarioService } from '../../../provider/respuesta-comentario/respuesta-comentario.service';
import { VComentariosService } from '../../../provider/v-cometarios/v-comentarios.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { Router, ActivatedRoute } from '@angular/router';

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
   //siempre va
 tCom: any;
 com:any;
coment: any;
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
datosMostrar: {
  id_comentario: number,
  id_tipo_comentario: number,
  descripcion: String,
};

  constructor(public dialog: MatDialog,
    public comentario:ComentarioService,
    public vcoment:VComentariosService,
    public tcomentario:TipoComentarioService) 
  {
    this.getComentario();
    this.getVistaComentarios();
    this.datosMostrar = {
      id_comentario: 1,
      id_tipo_comentario: null,
      descripcion:'' ,
      
    };
   }

  ngOnInit() {
    this.getComentario();
    this.getTipoComentario();
    this.getVistaComentarios()
    
  }
  getComentario(){
    this.comentario.getComentario().subscribe((resp)=>{
      this.com= resp['data'];
      console.log(this.com);
 
    },(error)=>{
      console.log(error);
    }
   )
 }
 getVistaComentarios(){
  this.vcoment.getVistaComentarios().subscribe((resp)=>{
    this.coment= resp['data'];
    console.log(this.coment);
  },(error)=>{
    console.log(error);
  }
 )
}
 getTipoComentario(){
  this.tcomentario.getTipoComentario().subscribe((resp)=>{
    this.tCom= resp['data'];
    console.log(this.tCom);

  },(error)=>{
    console.log(error);
  }
 )
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
  resp:any[];
  msj:string;
//selec pregunta
filtroSelec = '';
filtro = [
  {value: 'positiva', viewValue: 'Procede'},
  {value: 'negativa', viewValue: 'No procede'},
  
];
datosMostrar: {
  id_comentario: number,
  id_tipo_respuesta_comentario: number,
  descripcion: String,
};

constructor(public dialog: MatDialog,
  public repuesta:TipoRepuestaComentarioService,
  public repuestaC: RespuestaComentarioService,
  private route: ActivatedRoute,
  private router: Router,
) 
{
this.getTipoRepuestaC();
this.datosMostrar = {
  id_comentario: 1,
  id_tipo_respuesta_comentario: null,
  descripcion:'' ,
  
};
}
  

ngOnInit() {
  
  
}
getTipoRepuestaC(){
  this.repuesta.getTipoRepuestaC().subscribe((resp)=>{
    this.resp= resp['data'];
    console.log(this.resp);

  },(error)=>{
    console.log(error);
  }
 )
}
//guardar 
postRepuestaComentario() {
  //this.datosMostrar.id_comentario=this.repuesta.returnIdComenario();
  console.log(this.datosMostrar);
  this.repuestaC.postRepuestaComentario(this.datosMostrar).subscribe((resp)=>{
    this.msj= resp['data'].message;
    console.log(this.msj);
     //alert(this.msj)
     this.mostrarMensajeExito()
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
    this.router.navigate(['atencionCliente']);
    //this.router.onSameUrlNavigation
    
  });  
}
}
