import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";//Required for showing the modal
import { FuncionesService } from '../../../../../provider/funciones/funciones.service';

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.scss']
})
export class NuevoRolComponent implements OnInit {
  /*Attributes of the modal
  animal: string;
  name: string;*/

  //funcionActual:number;

  id:number;
  nombre:string;
  accion:string="crear";

  funciones: Array<{id:number,nombre:string,id_funcion:number,fecha_creacion:Date,estatus:string,activa:boolean}>=[];
  
  constructor(
    public dialogRef: MatDialogRef<NuevoRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public servicio_funcion: FuncionesService) {
      if(data.nombre){this.id=data.id;this.nombre=data.nombre;this.accion=data.accion;}
    }

  ngOnInit(){
    this.funciones=[];
    this.obtenerFunciones();
    //this.funcionActual=0;
  }

  obtenerFunciones(){
    this.servicio_funcion.getFunciones().subscribe(
      data=>{
        data['data'].forEach(fun => {
          this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
            fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:true});
        });
      },error=>{console.log(error)}
    );
  }
  activarOdesactivar(funcion){
    if(funcion.activa){
      funcion.activa=false;
      if(funcion.id_funcion==null)
      {this.funciones.filter((el, i, arr)=>(el.id_funcion == funcion.id)).forEach(fun=>{
        fun.activa=false;
      });}
    }
    else{funcion.activa=true;
      if(funcion.id_funcion==null)
      {this.funciones.filter((el, i, arr)=>(el.id_funcion == funcion.id)).forEach(fun=>{
        fun.activa=true;
      });}}
  }
  habilitarOdeshabilitar(funcion):boolean{
    if(funcion.id_funcion){
    let indice=this.funciones.map(function(e) { return e.id; }).indexOf(funcion.id_funcion);
    if(funcion.id_funcion==this.funciones[indice].id && !this.funciones[indice].activa){
      funcion.activa=false;
      return true;
    }
    else{return false;}}
    else{return false;}
  }

  onNoClick(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

  closeDialog() {//method returning the animal property to the parent component
    //this.dialogRef.close(this.animal);
    if(this.nombre!=null && this.nombre!=""){
      this.dialogRef.close({id:this.id,nombre:this.nombre,accion:this.accion,menu:this.funciones});
    }else{
      this.dialogRef.close(null);
    }
  }

}
