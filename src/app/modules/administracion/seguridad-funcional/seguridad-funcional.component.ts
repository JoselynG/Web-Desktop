import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
//....Modal
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';//needed for the modal
import { UsuariosService } from '../../../provider/usuarios/usuarios.service';
import { ClientesService } from '../../../provider/clientes/clientes.service';
import { EmpleadosService } from '../../../provider/empleados/empleados.service';
import { RolesService } from '../../../provider/roles/roles.service';

@Component({
  selector: 'app-seguridad-funcional',
  templateUrl: './seguridad-funcional.component.html',
  styleUrls: ['./seguridad-funcional.component.scss']
})
export class SeguridadFuncionalComponent implements OnInit {

  usuariosArr:any;empleadosArr:any;clientesArr:any;
  lista_usuarios:Array<{usuario: string,correo: string,telefono: string,rol: string}>=[];

  displayedColumns = ['usuario', 'correo', 'telefono', 'rol', 'menu'];
  dataSource : any;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  roles:any;
  
  constructor(public dialog: MatDialog, public servicio_usuario: UsuariosService,
    public servicio_empleado: EmpleadosService,
    public servicio_cliente: ClientesService,
    public servicio_rol: RolesService) {}//for having access to a modal

  ngOnInit(){
    this.getRoles();this.getUsuariosInfo();
  }
  
  getUsuariosInfo(){//METODO PARA LLENAR LA lista_usuarios
    this.servicio_empleado.getEmpleados().subscribe(//SERVICIO DE empleados QUE RETORNA JSON DE TABLA empleado
      (data1)=>{
        this.empleadosArr=data1['data'];
        ///----------------->
        this.servicio_cliente.getClientes().subscribe(//SERVICIO DE Clientes QUE RETORNA JSON DE TABLA cliente
          (data2)=>{
            this.clientesArr=data2['data'];
            console.log(this.empleadosArr);
            ///----------------->
            this.servicio_usuario.getUsuarios().subscribe(//SERVICIO DE USUARIOS QUE RETORNA JSON DE TABLA USUARIO
              (data3)=>{
                this.usuariosArr=data3['data'];
                console.log(this.clientesArr);
                console.log(this.usuariosArr);
                ///////////////////
                this.empleadosArr.forEach(empl => {
                  for (let j = 0; j < this.usuariosArr.length; j++) {//RECORRE LA LISTA DE empleados 
                    if(empl.id_usuario==this.usuariosArr[j].id){//SI EL empleado EN LA POSICION i COMPARTE EL MISMO ID DEL usuario, ENTONCES AGREGAMOS CIERTOS DATOS A LA lista_usuarios
                      this.lista_usuarios.push({usuario:(empl.nombre+" "+empl.apellido), correo:this.usuariosArr[j].correo,
                      telefono:empl.telefono, rol:this.nombreRol(this.usuariosArr[j].id_rol)});
                      break;
                    }
                  }
                });
                this.clientesArr.forEach(cli => {
                  for (let i = 0; i < this.usuariosArr.length; i++) {//RECORRE LA LISTA DE clientes 
                    if(cli.id_usuario==this.usuariosArr[i].id){//SI EL cliente EN LA POSICION i COMPARTE EL MISMO ID DEL usuario, ENTONCES AGREGAMOS CIERTOS DATOS A LA lista_usuarios
                      this.lista_usuarios.push({usuario:(cli.nombre+" "+cli.apellido), correo:this.usuariosArr[i].correo,
                      telefono:cli.telefono, rol:this.nombreRol(this.usuariosArr[i].id_rol)});
                      break;
                    }
                  }
                });
                this.dataSource=new MatTableDataSource(this.lista_usuarios);//le mandamos los datos a la tabla
                console.log(this.lista_usuarios);
                ///////////////////
              }, (error)=>{
                console.log(error);
              }
            );
          }, (error)=>{
            console.log(error);
          }
        );
      }, (error)=>{
        console.log(error);
      }
    ); 
  }

  getRoles(){//METODO PARA LLENAR LA lista de roles
    this.servicio_rol.getRoles().subscribe(//SERVICIO DE roles QUE RETORNA JSON DE TABLA rol
      (data)=>{
        this.roles=data['data'];
      }, (error)=>{
        console.log(error);
      }
    ); 
  }

  nombreRol(id):string{
    if(this.roles){
      for (let i = 0; i < this.roles.length; i++) {
        if(id==this.roles[i].id){
          return this.roles[i].nombre;
  }}}}


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