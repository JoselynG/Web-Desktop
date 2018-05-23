import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";//Required for showing the modal

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.scss']
})
export class NuevoRolComponent implements OnInit {
  /*Attributes of the modal
  animal: string;
  name: string;*/
  id:number;
  nombre:string;
  accion:string="crear";

    items = [
    {descripcion: 'Maestros', estatus: 'true'},
    {descripcion: 'Categorias', estatus: 'true'},
    {descripcion: 'Parametros', estatus: 'true'},
    {descripcion: 'Sistema', estatus: 'true'},
    {descripcion: 'Seguridad Funcional', estatus: 'true'},
    {descripcion: 'Base de Datos', estatus: 'true'},
    {descripcion: 'Diseño', estatus: 'true'},
    {descripcion: 'Landing', estatus: 'true'},
    {descripcion: 'Galeria', estatus: 'true'},
    {descripcion: 'Empresa', estatus: 'true'},
    {descripcion: 'Servicios', estatus: 'true'},
    {descripcion: 'Parametros', estatus: 'true'},
    {descripcion: 'Consejos', estatus: 'true'},
    {descripcion: 'Clientes', estatus: 'true'},
    {descripcion: 'Solicitudes', estatus: 'true'},
    {descripcion: 'Citas', estatus: 'true'},
    {descripcion: 'Reclamos', estatus: 'true'},
    {descripcion: 'Atencion al Cliente', estatus: 'true'},
    {descripcion: 'Reportes Estructurados', estatus: 'true'},
    {descripcion: 'Reportes Estadisticos', estatus: 'true'}
  ];

  constructor(
    public dialogRef: MatDialogRef<NuevoRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data.nombre){this.id=data.id;this.nombre=data.nombre;this.accion=data.accion;}
    }

  ngOnInit(){}

  onNoClick(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

  closeDialog() {//method returning the animal property to the parent component
    //this.dialogRef.close(this.animal);
    if(this.nombre!=null && this.nombre!=""){
      this.dialogRef.close({id:this.id,nombre:this.nombre,accion:this.accion});
    }else{
      this.dialogRef.close(null);
    }
  }

}
