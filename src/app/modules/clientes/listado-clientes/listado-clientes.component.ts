import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ClientesService } from '../../../provider/clientes/clientes.service';
import { error } from 'util';
import { UsuariosService } from '../../../provider/usuarios/usuarios.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any;
  usuarios: any;
  lista_clientes: Array<{cliente:string, correo:string, telefono:string, direccion:string, clid:number;}>=[];
  
  displayedColumns = ['cliente', 'correo', 'telefono', 'direccion', 'menu'];
  dataSource :any;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public servicio_cliente: ClientesService, public servicio_usuario: UsuariosService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getClientesInfo();
  }

  getClientesInfo(){//METODO PARA LLENAR LA lista_clientes
    this.servicio_cliente.getClientes().subscribe(//SERVICIO DE CLIENTES QUE RETORNA JSON DE TABLA CLIENTE
      (data1)=>{
        this.clientes=data1['data'];
        ///----------------->
        this.servicio_usuario.getUsuarios().subscribe(//SERVICIO DE USUARIOS QUE RETORNA JSON DE TABLA USUARIO
          (data2)=>{
            this.usuarios=data2['data'];
            ///////////////////
            this.clientes.forEach(clienteArr => {
              for (let i = 0; i < this.usuarios.length; i++) {//RECORRE LA LISTA DE USUARIOS 
                if(this.usuarios[i].id==clienteArr.id_usuario){//SI EL USUARIO EN LA POSICION i COMPARTE EL MISMO ID DEL CLIENTE (id_usuario), ENTONCES AGREGAMOS CIERTOS DATOS A LA lista_clientes
                  this.lista_clientes.push({cliente:(clienteArr.nombre+" "+clienteArr.apellido), correo:this.usuarios[i].correo,
                  telefono:clienteArr.telefono, direccion:clienteArr.direccion, clid:clienteArr.id});//LE AGREGAMOS EL NOMBRE+APELLIDO, CORREO, TELEFONO Y DIRECCION; LOS CUALES SE UTILIZAN EN EL mat-table.
                  break;//TERMINA EL LOOP AL ENCONTRAR UN USUARIO QUE COMPARTE INFORMACION CON EL CLIENTE.
                }
              }
            });
            this.dataSource=new MatTableDataSource(this.lista_clientes);//le mandamos los datos a la tabla
            console.log(this.lista_clientes);
            ///////////////////
          }, (error)=>{
            console.log(error);
          }
        );
      }, (error)=>{
        console.log(error);
      }
    );    
  }


  irACliente(cli) {
     this.router.navigate(['detallecliente/'+cli.clid], { relativeTo: this.route });
  }




}
