import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
//....Modal
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';//needed for the modal

@Component({
  selector: 'app-seguridad-funcional',
  templateUrl: './seguridad-funcional.component.html',
  styleUrls: ['./seguridad-funcional.component.scss']
})
export class SeguridadFuncionalComponent implements OnInit {

  displayedColumns = ['usuario', 'correo', 'telefono', 'rol', 'menu'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  usuarios = [
    {value: '1', viewValue: 'Administrador'},
    {value: '2', viewValue: 'Recepcionista'},
    {value: '3', viewValue: 'Estilista'}
  ];

  constructor(public dialog: MatDialog) {}//for having access to a modal

  ngOnInit(){}

  openModal(): void {//opens the modal
    let dialogRef = this.dialog.open(NuevoUsuarioComponent, {
      width: '400px',//sets the width
      height: '600px'
     // data: { name: this.name, animal: this.animal }//send this class's attributes to the modal
    });

    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
      //this.animal = result;//here we set this class animal property by the content of the result variable
    });
  }


}

export interface Element {
  usuario: string;
  correo: string;
  telefono: string;
  rol: string;
}

const ELEMENT_DATA: Element[] = [
  {usuario: 'Andrea Gonzalez', correo: "correo@uity",telefono: "041252664654", rol: 'Administrador'},
  {usuario: 'Paul Guedez', correo: "correo@uity",telefono: "041252664654", rol: 'Estilista'},
  {usuario: 'Juan Lopez', correo: "correo@uity",telefono: "041252664654", rol: 'Estilista'},
  {usuario: 'Homero Simpson', correo: "homer@hotmail.com",telefono: "041252664654", rol: ''},
];


///////////////////////////////////////////////////////////////////////////////////////////////////
//MODAL...........................................................................................
@Component({
  selector: 'app-nuevo-usuario',
  template: `
    <h2 mat-dialog-title>Selecciona los usuarios a importar</h2>
    <mat-dialog-content style="height:400px;">
      <div *ngFor="let empleado of empleados; index as i">
        <mat-checkbox (click)="mostrar(i)">{{empleado.nombre}}</mat-checkbox>
        <div *ngIf="empleado.isvisible">
          <mat-form-field>
            <input matInput type="email" placeholder="Correo">
          </mat-form-field>
          <mat-form-field>
            <input matInput placeholder="Contraseña">
          </mat-form-field><br>
          <mat-form-field>
            <mat-select placeholder="Rol">
              <mat-option *ngFor="let rol of roles" [value]="rol.value">
                {{ rol.viewValue }}
              </mat-option>
            </mat-select>
          </mat-form-field><br>
          <button mat-button>Añadir</button>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions>
        <button mat-button mat-dialog-close (click)="onNoClick()">Cancelar</button>
        <button mat-raised-button mat-dialog-close color="accent" (click)="closeDialog()">Importar</button>
    </mat-dialog-actions>
  `,
  styles: [``]
})
export class NuevoUsuarioComponent implements OnInit {

  empleados=[
    {nombre:'Ana Ramirez',telefono:'041252664654',correo:'correo@uity',rol:'',isvisible:false},
    {nombre:'Roberto Mendoza',telefono:'041252664654',correo:'correo@uity',rol:'',isvisible:false},
    {nombre:'Julian Marboro',telefono:'041252664654',correo:'correo@uity',rol:'',isvisible:false},
    {nombre:'Rebeca Rabeet',telefono:'041252664654',correo:'correo@uity',rol:'',isvisible:false}
  ];
  roles = [
    {value: '1', viewValue: 'Administrador'},
    {value: '2', viewValue: 'Recepcionista'},
    {value: '3', viewValue: 'Estilista'}
  ];

  constructor(
    public dialogRef: MatDialogRef<NuevoUsuarioComponent>//,for sending inf to the parent component
    /*@Inject(MAT_DIALOG_DATA) public data: any*/) { //for adquiring data from the parent component
   
    }

  ngOnInit(){}

  mostrar(ind){
    let empl=this.empleados[ind];
    if(empl.isvisible){
      empl.isvisible=false;
    }else{
      empl.isvisible=true;
    }
  }

  onNoClick(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

  closeDialog() {//method returning the animal property to the parent component
    this.dialogRef.close();
  }

}