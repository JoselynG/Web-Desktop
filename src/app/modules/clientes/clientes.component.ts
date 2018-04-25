import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';

//Los atributos que estan con un signo de interrogacion so opcionales para este prototipo
//mas, sin embargo, son requeridos al modelo en la estructura funcional (Cuando esta se realice)

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
  //date = new FormControl(moment());
  cliente: IClienteUsuario={
    cliente:{nombre:"Daenerys", apellido:"Targaryen",
    telefono:"02008554544", fecha_nacimiento: "1987-04-11"},
    usuario:{correo:"la.mil.titulos@gmail.com"}
  }

  listaTipoParam: ITipoParametro[]=[
    {id:1,nombre:"Cabello",descripcion:"el cabello",fecha_creacion:"2018-03-02",estatus:"inactivo",
      parametros:[
        {id:1,id_tipo_parametro:1,//Cabello
          nombre:"Longitud",descripcion:"la longitud",fecha_creacion:"2018-02-02",estatus:"inactivo",
            valores_parametro:[
              {id:5,id_parametro:1,//longitud cabello
                nombre:"Largo",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:"2018-02-02", estatus:"inactivo"},
              {id:6,id_parametro:1,//longitud cabello
                nombre:"Corto",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:"2018-02-02", estatus:"activo"}
            ]},
          {id:2,id_tipo_parametro:1,//Cabello
          nombre:"Tipo (emulsion epicutanea)",descripcion:"la emulsion",fecha_creacion:"2018-02-02",estatus:"inactivo",
            valores_parametro:[
              {id:1,id_parametro:2,//tipo (emulsion epicutanea)
                nombre:"Normal",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:"2018-02-02",estatus:"inactivo"},
               {id:2,id_parametro:2,//tipo (emulsion epicutanea)
               nombre:"Seco",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
               fecha_creacion:"2018-02-02",estatus:"activo"},
               {id:3,id_parametro:2,//tipo (emulsion epicutanea)
               nombre:"Graso",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
               fecha_creacion:"2018-02-02",estatus:"inactivo"},
               {id:4,id_parametro:2,//tipo (emulsion epicutanea)
               nombre:"Mixto",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
               fecha_creacion:"2018-02-02", estatus:"inactivo"}
            ]}
      ]},
    {id:2,nombre:"Piel",descripcion:"la piel",fecha_creacion:"2018-03-03",estatus:"inactivo",
      parametros:[
        {id:3,id_tipo_parametro:2,//Piel
          nombre:"Textura",descripcion:"la Textura",fecha_creacion:"2018-02-02",estatus:"inactivo",
        valores_parametro:[
          {id:7,id_parametro:3,//textura piel
            nombre:"Lisa",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
            fecha_creacion:"2018-02-02", estatus:"activo"},
            {id:8,id_parametro:3,//textura piel
              nombre:"Aspera",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
              fecha_creacion:"2018-02-02", estatus:"inactivo"}
        ]},
          {id:4,id_tipo_parametro:2,//Piel
          nombre:"Color",descripcion:"el color",fecha_creacion:"2018-02-02",estatus:"inactivo",
        valores_parametro:[
          {id:9,id_parametro:4,//color piel
            nombre:"Clara",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
            fecha_creacion:"2018-02-02", estatus:"inactivo"},
            {id:10,id_parametro:4,//color piel
            nombre:"Oscura",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
            fecha_creacion:"2018-02-02", estatus:"activo"}
        ]}
      ]},
      {id:4,nombre:"Sexo",descripcion:"Genero de la persona",fecha_creacion:"2018-03-04",estatus:"activo",
    parametros:[
        {id:6,id_tipo_parametro:4,//Sexo
          nombre:"Genero",descripcion:"el genero de la persona",fecha_creacion:"2018-02-02",estatus:"activo",
        valores_parametro:[
          {id:12,id_parametro:6,//Genero
            nombre:"masculino",descripcion:"sexo masculino",
            fecha_creacion:"2018-02-02", estatus:"inactivo"},
          {id:13,id_parametro:6,//Genero
            nombre:"femenino",descripcion:"sexo femenino",
            fecha_creacion:"2018-02-02", estatus:"activo"}
        ]}
    ]},
    {id:3,nombre:"Ojos",descripcion:"los ojos",fecha_creacion:"2018-03-04",estatus:"inactivo",
      parametros:[
        {id:5,id_tipo_parametro:3,//Ojos
          nombre:"Color",descripcion:"el color de ojos",fecha_creacion:"2018-02-02",estatus:"inactivo",
        valores_parametro:[
          {id:11,id_parametro:5,//color ojos
            nombre:"Azules",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
            fecha_creacion:"2018-02-02", estatus:"activo"},
            {id:12,id_parametro:5,//color ojos
              nombre:"Verdes",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
              fecha_creacion:"2018-02-02", estatus:"inactivo"}
        ]}
      ]},
    
];

  constructor() { }
  ngOnInit() {
    this.listaTipoParam[0].estatus="activo";
      this.listaTipoParam[0].parametros[0].estatus="activo";
  }

obtenerGenero():string{
  let encontro=true;
  let nun=0;
  let result='m';
  while (encontro) {
    if(this.listaTipoParam[nun].nombre=="Sexo"){
      result=(this.listaTipoParam[nun].parametros[0].valores_parametro[0].estatus=="activo")?'m':'f';
      encontro=false;
    }
    nun++;
  }
  return result;
}

  _caracteristicas:IParametro[]=this.listaTipoParam[0].parametros;
  _valores:IValorParametro[]=this.listaTipoParam[0].parametros[0].valores_parametro;//Inicializa la lista con los valores parametros del primer tipo_parametro
  
  checkear1(tip_prmtr){
    if (tip_prmtr.estatus=="inactivo"){
    /*var slides = document.getElementsByClassName("paraDesactivar"); 
    for(var i = 0; i < slides.length; i++) {
       slides.item(i).lastElementChild.firstElementChild.setAttribute('class','opaque');
    }*/ 
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
  }

}

//Interfaces
/* DEL CLIENTE */
interface ICliente {
  id_cliente?: number;
  nombre: string;
  apellido: string;
  cedula?: string;
  telefono: string;
  direccion?: string;
  fecha_nacimiento: string;//DATE
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
  fecha_creacion:string;//Date
  estatus:string;
  parametros: IParametro[];
}
interface IParametro{ //Ejm: longitud
  id:number;
  id_tipo_parametro:number;
  nombre:string;
  descripcion:string;
  fecha_creacion:string;//Date
  estatus:string;
  valores_parametro: IValorParametro[];
}
interface IValorParametro{ //Ejm: corto
  id:number; 
  id_parametro:number;
  nombre:string; 
  descripcion:string;//Lo agregue, pero no esta contemplado en la entidad
  fecha_creacion:string//Date; 
  estatus:string;
}
/*
interface IParametroValorParametro{
  nombre_parametro: IParametro;
  valores_parametro: IValorParametro[];
}
*/