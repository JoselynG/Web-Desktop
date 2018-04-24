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
  nombre:string;
  descripcion:string;

  constructor(
    public dialogRef: MatDialogRef<NuevoRolComponent>//,for sending inf to the parent component
    /*@Inject(MAT_DIALOG_DATA) public data: any*/) { //for adquiring data from the parent component
      /*instanciating modal's attributes by parent's attributes
      this.animal=data.animal;
      this.name=data.name;*/
    }

  ngOnInit(){}

  onNoClick(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

  closeDialog() {//method returning the animal property to the parent component
    //this.dialogRef.close(this.animal);
    if(this.nombre!=null && this.nombre!="" && this.descripcion!=null && this.descripcion!=""){
      this.dialogRef.close({nombre:this.nombre,descripcion:this.descripcion});
    }else{
      this.dialogRef.close(null);
    }
  }

}
