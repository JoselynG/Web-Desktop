import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { ClientesService } from '../../provider/clientes/clientes.service';
import { UsuariosService } from '../../provider/usuarios/usuarios.service';
import { PerfilService } from '../../provider/perfil/perfil.service';
import { TipoParametroService } from '../../provider/tipo-parametro/tipo-parametro.service';
import { ParametroService } from '../../provider/parametro/parametro.service';
import { ValorParametroService } from '../../provider/valor-parametro/valor-parametro.service';
import {MatDialog, MatDialogRef} from '@angular/material';//needed for the modal
import { MensajeExitoComponent } from '../../mensajes/mensaje-exito/mensaje-exito.component';
/*import { registerLocaleData } from '@angular/common';
import localees from '@angular/common/locales/es-VE';

registerLocaleData(localees);*/

/**///////////////////////////////////////////////////// */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  //verTabPerfil=false;//Variable de control para desplegar el contenido del perfil del cliente
  constructor() { }
  ngOnInit() {
  }
  //Metodo que le permite a las variables de control desplegar sus respectivas vistas.
  /*verificarTab(grupo_de_tabs){
    if (grupo_de_tabs.selectedIndex==1) {
      this.verTabPerfil=true;
    } 
  }*/
}

/**///////////////////////////////////////////////////// */
@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.scss'],
  /*providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],*/
})
export class ClientePrincipalComponent implements OnInit {

  public actual_tipP;public actual_par;public actual_valP;
  cliID:number;
  genero:string;
  mensaje:string;
  infoCliente:{
    id:number;
    nombre:string;
    apellido:string;
    telefono:string;
    fecha_nacimiento:Date;
    correo:string;
  };
  cliente:{
    nombre:string;
    apellido:string;
    cedula:string;
    telefono:string;
    direccion:string;
    id_ciudad:number;
    fecha_nacimiento:Date;
    tipo_cliente:string;
    estatus:string;
    id_usuario:number;
  };
  usuario:{
    id_rol:number;
    correo:string;
    contrasenia:string;
    ultimo_acceso:Date;
    fecha_creacion:Date;
    estatus:string;
  };
  perfil_global:any;
  perfil_cliente:Array<{id:number,id_valor_parametro:number,id_cliente:number,estatus:string,fecha_creacion:Date}>=[];
  
  
  constructor(private route: ActivatedRoute, public servicio_cliente: ClientesService,
  public servicio_usuario: UsuariosService, public servicio_perfil: PerfilService,
  public servicio_tip_param: TipoParametroService,
  public servicio_param: ParametroService, public servicio_val_param:ValorParametroService,
  public dialog: MatDialog) { }

  ngOnInit() {
    ///
    this.cliente={
      nombre:'',
      apellido:'',
      cedula:'',
      telefono:'',
      direccion:'',
      id_ciudad:0,
      fecha_nacimiento:new Date(),
      tipo_cliente:'',
      estatus:'',
      id_usuario:0,
    };
    this.usuario={
      id_rol:0,
      correo:'',
      contrasenia:'',
      ultimo_acceso:new Date(),
      fecha_creacion:new Date(),
      estatus:'',
    };
    this.infoCliente={
      id:0,
      nombre:'',
      apellido:'',
      telefono:'',
      fecha_nacimiento:new Date(),
      correo:''
    };
    ///
    //this.listaTipoParam[0].estatus="A";
    //this.listaTipoParam[0].parametros[0].estatus="A";
    this.getClienteInfo();
    this.obtenerPerfilCliente();
    this.obtenerTipParParamValPar();
  }

  //OBTIENE INFORMACION DEL CLIENTE PASADO POR URL
  getClienteInfo(){
    ///
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.cliID = id;
    });
    ///
    this.servicio_cliente.getCliente(this.cliID).subscribe(
      (data)=>
      {
        this.cliente=data['data'];
        this.servicio_usuario.getUsuario(this.cliente.id_usuario).subscribe(
          (data2)=>
          {
            this.usuario=data2['data'];
            this.infoCliente={id:this.cliID,nombre:this.cliente.nombre,apellido:this.cliente.apellido,telefono:this.cliente.telefono,fecha_nacimiento:this.cliente.fecha_nacimiento, correo:this.usuario.correo};
            console.log(this.infoCliente)
          },(error)=>{
            console.log(error);
          }
      );
      },(error)=>{
        console.log(error);
      }
  );
  }
  editarCliente(){
    this.cliente.nombre=this.infoCliente.nombre;this.cliente.apellido=this.infoCliente.apellido;
    this.cliente.telefono=this.infoCliente.telefono;this.cliente.fecha_nacimiento=this.infoCliente.fecha_nacimiento;

    this.servicio_cliente.putCliente(this.cliID,this.cliente).subscribe(
      (data)=>
      {
        this.mensaje=data['data'].message;
        this.mostrarMensajeExito();
      },(error)=>{
        console.log(error);
      }
  );
  }

//OBTIENE LOS DATOS DEL PERFIL EXCLUSIVAMENTE DEL CLIENTE ACTUAL
obtenerPerfilCliente(){
  this.servicio_perfil.getPerfil().subscribe(
    (data)=>
    {
      this.perfil_global=data['data'];
      //console.log(this.perfil_global);
      //
      //console.log('Muestra info json del perfil global:\n',this.perfil_global)
      this.perfil_global.forEach(element => {
        if(element.id_cliente==this.cliID){
          this.perfil_cliente.push(element);
        }
      });
      console.log('Array del perfil\n',this.perfil_cliente);
      //
    },(error)=>{
      console.log(error);
    }
  );
}

valParametros:Array<{id:number,id_parametro:number,nombre:string,estatus:string,descripcion:string,fecha_creacion:Date}>=[];
parametros:Array<{id:number,nombre:string,estatus:string,id_tipo_parametro:number,fecha_creacion:Date,visible:boolean}>=[];
tipParametros:Array<{id:number,nombre:string,descripcion:string,estatus:string,fecha_creacion:Date,clasificacion:string}>=[];

//OBTIENE LOS TIPOS DE PARAMETROS, PARAMETROS Y VALORES PARAMETRO. ADEMAS SETEA EL SEXO DEL CLIENTE
obtenerTipParParamValPar(){
  this.servicio_val_param.getValorParametros().subscribe(
    (data)=>{
      this.valParametros=data['data'];
      //
      this.servicio_param.getParametros().subscribe(
        (data2)=>{
          this.parametros=data2['data'];
          //..........Para obtener sexo del cliente......................
                      let id_sexo,id_m,id_f;
                      for (let i = 0; i < this.parametros.length; i++) {
                        if (this.parametros[i].nombre=='sexo') {
                          id_sexo=this.parametros[i].id;
                          break;
                        }
                      }
                      let cont=0;
                      for (let j = 0; j < this.valParametros.length; j++) {
                        if (this.valParametros[j].nombre=='mujer') {
                          id_f=this.valParametros[j].id;
                          cont++;
                        }
                        if (this.valParametros[j].nombre=='hombre') {
                          id_m=this.valParametros[j].id;
                          cont++;
                        }
                        if(cont==2){
                          break;
                        }
                      }
                      for (let k = 0; k < this.perfil_cliente.length; k++) {
                        if(this.perfil_cliente[k].id_valor_parametro==id_f){
                          this.genero='f';break;
                        }
                        if(this.perfil_cliente[k].id_valor_parametro==id_m){
                          this.genero='m';break;
                        }
                      }
          //
          this.servicio_tip_param.getTipoParametros().subscribe(
            (data3)=>{
              this.tipParametros=data3['data'];
              //
              
              //
            },(error)=>{
              console.log(error);
            }
          );
          //
        },(error)=>{
          console.log(error);
        }
      );
      //
    },(error)=>{
      console.log(error);
    }
  );
}

//METODO QUE CHECKEA SI EL VALOR PARAMETRO ESTA SELECCIONADO O NO
estaSeleccionadoVP(valpa):boolean{
  let valor;
  for (let i = 0; i < this.perfil_cliente.length; i++) {
    if (this.perfil_cliente[i].id_valor_parametro==valpa) {
      valor=true;
      break;
    }
    valor=false;
  }
  return valor;
}

mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '350px',//sets the width
    height: '200px',
    data: { msj: this.mensaje }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
  });
}

 /* _caracteristicas:IParametro[]=this.listaTipoParam[0].parametros;
  _valores:IValorParametro[]=this.listaTipoParam[0].parametros[0].valores_parametro;//Inicializa la lista con los valores parametros del primer tipo_parametro
  
  checkear1(tip_prmtr){
    if (tip_prmtr.estatus=="inactivo"){
    this.listaTipoParam.forEach(element => {
      element.estatus="inactivo";
    });
    tip_prmtr.estatus="activo";
    tip_prmtr.parametros.forEach(element => {
      element.estatus="inactivo";
    });
    tip_prmtr.parametros[0].estatus="activo";
    this._caracteristicas=[];//Borra todo en el arreglo
    ///////////////////////////////////////////////AGREGA A LA LISTA DE Parametros
      this._caracteristicas=tip_prmtr.parametros;
    ///////////////////////////////////////////////
    this._valores=this._caracteristicas[0].valores_parametro;
    }
  }
  
  checkear2(parametro){
    if (parametro.estatus=="inactivo"){ 
    this._caracteristicas.forEach(element => {
      element.estatus="inactivo";
    });
    parametro.estatus="activo";
    this._valores=[];//Borra todo en el arreglo
    ///////////////////////////////////////////////AGREGA PARAMETROS A LA LISTA DE VALORES PARAMETROS
      this._valores=parametro.valores_parametro;
    ///////////////////////////////////////////////
    }
  }*/

}

//Interfaces
/* DEL CLIENTE */
interface ICliente {
  id: number;
  nombre: string;
  apellido: string;
  cedula?: string;
  telefono: string;
  direccion?: string;
  fecha_nacimiento: Date;//DATE
  fecha_creacion?: string;//DATE
  estatus?: string;
}
interface IUsuario{
  id_usuario?: number;
  id_rol?: number;
  correo: string;
  contrasenia?: string;
  estatus?:string;
  ultimo_acceso?: Date;
  fecha_creacion?: Date;
}
interface IClienteUsuario{
  cliente: ICliente;
  usuario: IUsuario;
}

/* DE LA PARAMETRIZACION */
interface ITipoParametro{ //Ejm: Cabello
  id:number;
  nombre:string;
  descripcion:string;
  fecha_creacion:Date;
  estatus:string;
  clasificacion:string;
  parametros: IParametro[];
}
interface IParametro{ //Ejm: longitud
  id:number;
  id_tipo_parametro:number;
  nombre:string;
  visible:boolean;
  fecha_creacion:Date;
  estatus:string;
  valores_parametro: IValorParametro[];
}
interface IValorParametro{ //Ejm: corto
  id:number; 
  id_parametro:number;
  nombre:string; 
  descripcion:string;
  fecha_creacion:Date; 
  estatus:string;
}
/*
interface IParametroValorParametro{
  nombre_parametro: IParametro;
  valores_parametro: IValorParametro[];
}
*/




/*listaTipoParam: ITipoParametro[]=[
    {id:1,nombre:"Cabello",descripcion:"el cabello",fecha_creacion:new Date("2018/03/04"),estatus:"inactivo",clasificacion:"CA",
      parametros:[
        {id:1,id_tipo_parametro:1,//Cabello
          nombre:"Longitud",visible:true,fecha_creacion:new Date("2018/02/02"),estatus:"A",
            valores_parametro:[
              {id:5,id_parametro:1,//longitud cabello
                nombre:"Largo",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:new Date("2018/02/02"), estatus:"A"},
              {id:6,id_parametro:1,//longitud cabello
                nombre:"Corto",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:new Date("2018/02/02"), estatus:"A"}
            ]},
          {id:2,id_tipo_parametro:1,//Cabello
          nombre:"Tipo (emulsion epicutanea)",visible:true,fecha_creacion:new Date("2018/02/02"),estatus:"A",
            valores_parametro:[
              {id:1,id_parametro:2,//tipo (emulsion epicutanea)
                nombre:"Normal",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:new Date("2018/02/02"),estatus:"A"},
               {id:2,id_parametro:2,//tipo (emulsion epicutanea)
               nombre:"Seco",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
               fecha_creacion:new Date("2018/02/02"),estatus:"A"},
               {id:3,id_parametro:2,//tipo (emulsion epicutanea)
               nombre:"Graso",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
               fecha_creacion:new Date("2018/02/02"),estatus:"A"},
               {id:4,id_parametro:2,//tipo (emulsion epicutanea)
               nombre:"Mixto",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
               fecha_creacion:new Date("2018/02/02"), estatus:"A"}
            ]}
      ]},
      {id:4,nombre:"Datos Basicos",descripcion:"Datos basicos del cliente",fecha_creacion:new Date("2018/03/04"),estatus:"A",clasificacion:"",
    parametros:[
        {id:6,id_tipo_parametro:4,//Datos Basicos
          nombre:"Sexo",visible:true,fecha_creacion:new Date("2018/02/02"),estatus:"A",
        valores_parametro:[
          {id:12,id_parametro:6,//Sexo
            nombre:"hombre",descripcion:"",
            fecha_creacion:new Date("2018/02/02"), estatus:"A"},
          {id:13,id_parametro:6,//Sexo
            nombre:"mujer",descripcion:"",
            fecha_creacion:new Date("2018/02/02"), estatus:"I"}
        ]}
    ]},
    {id:3,nombre:"Ojos",descripcion:"los ojos",fecha_creacion:new Date("2018/03/04"),estatus:"inactivo",clasificacion:"",
      parametros:[
        {id:5,id_tipo_parametro:3,//Ojos
          nombre:"Color",visible:true,fecha_creacion:new Date("2018/02/02"),estatus:"A",
        valores_parametro:[
          {id:11,id_parametro:5,//color ojos
            nombre:"Azules",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
            fecha_creacion:new Date("2018/02/02"), estatus:"A"},
            {id:12,id_parametro:5,//color ojos
              nombre:"Verdes",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
              fecha_creacion:new Date("2018/02/02"), estatus:"A"}
        ]}
      ]},    
  ];*/
