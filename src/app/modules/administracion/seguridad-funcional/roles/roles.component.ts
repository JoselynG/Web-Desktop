import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';//needed for the modal
import { NuevoRolComponent } from './nuevo-rol/nuevo-rol.component';//this is the modal
import { RolesService } from '../../../../provider/roles/roles.service';
import { error } from 'util';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';
import { RolFuncionService } from '../../../../provider/rol-funcion/rol-funcion.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  /*this class properties
  animal: string;
  name: string;*/
  roles:Array<{id:number,nombre:string,estatus:string,fecha_creacion:Date}>=[];

  constructor(public dialog: MatDialog, public servicio_rol: RolesService, public servicio_rol_funcion: RolFuncionService) {}

  ngOnInit(){
    this.roles=[];
    this.cargarRoles();
  }

  cargarRoles(){
    this.servicio_rol.getRoles().subscribe(
      (data)=>{
        let roloj=data['data'];
        roloj.forEach(rol => {
          if (rol.estatus=="A") {
            this.roles.push(rol);
          }
        });
      },(error)=>{
        console.log(error);
      }
    );
  }

  eliminarRol(rol){
    this.servicio_rol.putRol(rol.id,{estatus:"I"}).subscribe(
      data=>{
        this.servicio_rol_funcion.getRolFuncion().subscribe(data2=>{
          let datos=data2['data'].filter((el, i, arr)=>(el.id_rol == rol.id));
          for (let i = 0; i < datos.length; i++) {
            this.servicio_rol_funcion.putRolFuncion(datos[i].id,{estatus:"I"}).subscribe(data3=>{
              console.log('rolfuncion actualizado!');
            },error=>{console.log(error);});
          }
            this.mostrarMensajeExito("Rol eliminado con éxito!");this.ngOnInit();
        },error=>{console.log(error);});
    },
      error=>{console.log(error)}
    );
  }

  openDialog(id,nombre,accion): void {//opens the modal
    let dialogRef = this.dialog.open(NuevoRolComponent, {
      width: '400px',//sets the width
      height: '500px',
      data: { id: id, nombre: nombre, accion: accion }//send this class's attributes to the modal
    });

    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
      if(result!=null){
        if(result.accion=="crear"){
          this.servicio_rol.postRol({nombre:result.nombre}).subscribe(
            (data)=>{
              this.servicio_rol.getRoles().subscribe(
                data2=>{
                  let arrid_para_rol:Array<any>=data2['data'];//OBTENIDOS TODOS LOS roles
                  let arr:Array<any>=arrid_para_rol.sort((a,b) => (b.id - a.id));//EL MAS NUEVO LO COLOCAMOS EN LA PRIMERA POSICION
                  let mensaje=this.servicio_rol_funcion.postRolFuncionVarios(arr[0].id,result.menu);
                  this.mostrarMensajeExito(mensaje);
                  this.ngOnInit();
                },error=>{console.log(error)}
              );
            },(error)=>{console.log(error);}
          );
        }else{
          this.servicio_rol.putRol(result.id,{nombre:result.nombre}).subscribe(
            (data)=>{
              let mens=this.servicio_rol_funcion.putRolFuncionVarios(result.id,result.menu);
              this.mostrarMensajeExito(mens);
              this.ngOnInit();
            },(error)=>{console.log(error);}
          );
        }
        }
    });
  }


  mostrarMensajeExito(mns): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '140px', 
      data: { msj: mns }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('modal cerrado');
    });
  }

}



