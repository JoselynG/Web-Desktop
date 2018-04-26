import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';//needed for the modal
import { NuevoRolComponent } from './nuevo-rol/nuevo-rol.component';//this is the modal

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  /*this class properties
  animal: string;
  name: string;*/
  roles=[
    {nombre:'Administrador', descripcion:'Tiene el mayor acceso a la configuracion del sistema, acceso exclusivo a los diferentes modulos.'},
    {nombre:'Estilista', descripcion:'Tiene acceso a ciertos modulos del sistema.'},
    {nombre:'Recepcionista', descripcion:'Tiene acceso a ciertos modulos del sistema concernienetes a los clientes.'}
  ];

  constructor(public dialog: MatDialog) {}//for having access to a modal

  ngOnInit(){}

  openDialog(): void {//opens the modal
    let dialogRef = this.dialog.open(NuevoRolComponent, {
      width: '800px',//sets the width
      height: '500px'
     // data: { name: this.name, animal: this.animal }//send this class's attributes to the modal
    });

    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
      if(result!=null){this.roles.push({nombre:result.nombre,descripcion:result.descripcion});}
      //this.animal = result;//here we set this class animal property by the content of the result variable
    });
  }

}



