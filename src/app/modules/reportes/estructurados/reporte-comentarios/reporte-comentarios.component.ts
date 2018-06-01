import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { TipoComentarioService } from '../../../../provider/tipo-comentario/tipo-comentario.service';
import { TipoRepuestaComentarioService } from '../../../../provider/tipo-repuesta-comentario/tipo-repuesta-comentario.service';
import { ReporteComentarioService } from '../../../../provider/reporte-comentario/reporte-comentario.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reporte-comentarios',
  templateUrl: './reporte-comentarios.component.html',
  styleUrls: ['./reporte-comentarios.component.scss']
})
export class ReporteComentariosComponent implements OnInit {
  datosMostrar: {
    id_repuesta_comentario:number,
    tipo_comentario: string,
    nombre: string,
    descripcion:string;
    fecha_creacion:Date;
    respuesta_comentario: {
      id: number
      id_tipo_respuesta_comentario: number
      id_comentario: number
      descripcion: string
      tipo_respuesta_comentario: string
    };
  
    
  }

  tipo: any;
  tipoR:any;
  reporteCom: any ;

filtroTipoComSelec = 'todos';
filtroTipoRespSelec = 'todos';
filtroTipoCom = [
  {value: 'opinion', viewValue: 'Opiniones'},
  {value: 'queja', viewValue: 'Quejas'},
  {value: 'sugerencia', viewValue: 'Sugerencias'},
  {value: 'dudas', viewValue: 'Dudas'},
  {value: 'todos', viewValue: 'Todos'},
];
filtroTipoResp = [
  {value: 'positiva', viewValue: 'Positiva'},
  {value: 'negativa', viewValue: 'Negativa'},
  {value: 'sin', viewValue: 'Sin responder'},
  {value: 'todos', viewValue: 'Todos'},
];

displayedColumns = ['cliente', 'fecha', 'tipo', 'descripcion', 'tipoR', 'resp'];
dataSource: any;

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
@ViewChild(MatSort) sort: MatSort;

/**
 * Set the sort after the view init since this component will
 * be able to query its view for the initialized sort.
 */
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}

  constructor(public dialog: MatDialog,
    public tiopoC:TipoComentarioService,
    public tipoRespC: TipoRepuestaComentarioService, 
    public reporteC: ReporteComentarioService)
   { this.gettipocomentario();
    this.gettipoRepuestaC();
    this.getReporteC();

    this.datosMostrar = {
      id_repuesta_comentario:0,
      tipo_comentario: '',
      nombre: '',
      descripcion:'' ,
      fecha_creacion:new Date(),
      respuesta_comentario: {
        id: 0,
        id_tipo_respuesta_comentario: 0,
        id_comentario: 0,
        descripcion: '',
        tipo_respuesta_comentario: '',
      }
      
    };
  }

  ngOnInit() {
    this.gettipocomentario();
    this.gettipoRepuestaC();
    this.getReporteC();
    //le mandamos los datos a la tabla
    console.log(this.reporteCom);
  }


gettipocomentario(){
  this.tiopoC.getTipoComentario().subscribe((resp)=>{
    this.tipo= resp['data'];
    console.log(this.tipo);

  },(error)=>{
    console.log(error);
  }
 )
}
 

gettipoRepuestaC(){
  this.tipoRespC.getTipoRepuestaC().subscribe((resp)=>{
    this.tipoR= resp['data'];
    console.log(this.tipoR);

  },(error)=>{
    console.log(error);
  }
 )
}

getReporteC(){
  this.reporteC.getReporteC().subscribe((resp)=>{
    this.reporteCom= resp['data'];
    
    console.log(this.reporteCom);
    this.dataSource=new MatTableDataSource(this.reporteCom);
  },(error)=>{
    console.log(error);
  }
 )
}
}