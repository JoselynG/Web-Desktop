import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../provider/usuarios/usuarios.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmpleadosService } from '../../../../provider/empleados/empleados.service';
import { RolesService } from '../../../../provider/roles/roles.service';

@Component({
  selector: 'app-asignar-funciones',
  templateUrl: './asignar-funciones.component.html',
  styleUrls: ['./asignar-funciones.component.scss']
})
export class AsignarFuncionesComponent implements OnInit {
  /*items = [
    {descripcion: 'Consultar dashboard de negocio', estatus: 'true'},
    {descripcion: 'Consultar dashboard propio de empleado', estatus: 'true'},
    {descripcion: 'Registrar otros suarios', estatus: 'true'},
    {descripcion: 'Registrar roles', estatus: 'true'},
    {descripcion: 'Editar perfiles de usuarios', estatus: 'true'},
    {descripcion: 'Editar funciones de usuarios', estatus: 'true'},
    {descripcion: 'Agendar citas y registrar detalles de servicio', estatus: 'true'},
    {descripcion: 'Consultar todas la citas', estatus: 'true'},
    {descripcion: 'Consultar citas de empleado', estatus: 'true'},
    {descripcion: 'Registrar tipo de servicio', estatus: 'true'},
    {descripcion: 'Consultar reclamos', estatus: 'true'},
    {descripcion: 'Consultar sugerencias', estatus: 'true'},
    {descripcion: 'Responder reclamos', estatus: 'true'},
    {descripcion: 'Registrar parametros', estatus: 'true'},
    {descripcion: 'Modificar portal web', estatus: 'true'},
    {descripcion: 'Registrar informacion de empresa', estatus: 'true'},
    {descripcion: 'Consultar reportes', estatus: 'true'}
  ];*/

  empleado:{id:number;nombre:string;apellido:string;cedula:string;telefono:string;direccion:string;
    fecha_nacimiento:Date;estatus:string;id_ciudad:number;id_usuario:number;imagen:string;
    fecha_creacion:Date;visible:boolean};
  usuario:{id:number;id_rol:number;correo:string;contrasenia:string;
    ultimo_acceso:Date;fecha_creacion:Date;estatus:string};

  roles:Array<{id:number,nombre:string,estatus:string,fecha_creacion:Date}>=[];

  //dato=['telefono',true];

  constructor(public servicio_rol: RolesService,public servicio_empleado: EmpleadosService,public servicio_usuario: UsuariosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empleado={id:0,nombre:'',apellido:'',cedula:'',telefono:'',direccion:'',
      fecha_nacimiento:new Date(),estatus:'',id_ciudad:0,id_usuario:0,imagen:'',
      fecha_creacion:new Date(),visible:false};
    this.usuario={id:0,id_rol:0,correo:'',contrasenia:'',
      ultimo_acceso:new Date(),fecha_creacion:new Date(),estatus:''};
    this.obtenerUsuario();
    this.obtenerRoles();
  }

  obtenerUsuario(){
    let id:number;
    this.route.paramMap.subscribe((params: ParamMap) => {
      id = parseInt(params.get('id'));
    });

    this.servicio_empleado.getEmpleado(id).subscribe(
      (data)=>{
        this.empleado=data['data'];
        this.servicio_usuario.getUsuario(this.empleado.id_usuario).subscribe(
          (data2)=>{
            this.usuario=data2['data'];
          },(error)=>{
            console.log(error);
          }
        );
      },(error)=>{
        console.log(error);
      }
    );
  }
  obtenerRoles(){
    this.servicio_rol.getRoles().subscribe(
      (data)=>{
        this.roles=data['data'];
      },(error)=>{
        console.log(error);
      }
    );
  }
  editarUsuario(){
    this.servicio_usuario.putUsuario(this.empleado.id_usuario,this.usuario).subscribe(
      (data)=>{
        console.log(data['data'].message);
      },(error)=>{console.log(error);}
    );
  }

  /*isChecked(){
    if(this.dato[1]){
      this.dato[1]=false;}
    else{
      this.dato[1]=true;}
  }*/
    

}
