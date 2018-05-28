import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";//Required for showing the modal
import { FuncionesService } from '../../../../../provider/funciones/funciones.service';
import { RolFuncionService } from '../../../../../provider/rol-funcion/rol-funcion.service';

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
    @Inject(MAT_DIALOG_DATA) public data: any,public servicio_funcion: FuncionesService,
      public servicio_rol_funcion: RolFuncionService) {
      if(data.nombre){this.id=data.id;this.nombre=data.nombre;this.accion=data.accion;}
    }

  ngOnInit(){
    this.funciones=[];
    this.obtenerFunciones();
    //this.funcionActual=0;
  }

  obtenerFunciones(){
    if(this.id>0)
    {
      this.servicio_funcion.getFunciones().subscribe(
        data=>{
          //
          this.servicio_rol_funcion.getRolFuncion().subscribe(data2=>{
            //
            let funcsDeEsteRol=data2['data'].filter((el, i, arr)=>(el.id_rol == this.id));
            //
            let encontro=false;
            data['data'].forEach(fun => {
              encontro=false;
              for (let i = 0; i < funcsDeEsteRol.length; i++) {
                if(fun.id==funcsDeEsteRol[i].id_funcion && funcsDeEsteRol[i].estatus!="I"){
                  this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
                    fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:true});
                    encontro=true;
                    break;
                }
              }
              if(!encontro){
                this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
                  fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:false});
              }
            });
          },error=>{console.log(error)});
          //
        },error=>{console.log(error)}
      );
    }
    else
    {this.servicio_funcion.getFunciones().subscribe(
      data0=>{
        data0['data'].forEach(fun => {
          this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
            fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:true});
        });
      },error=>{console.log(error)}
    );}
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
