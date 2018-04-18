import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

//Los atributos que estan con un signo de interrogacion so opcionales para este prototipo
//mas, sin embargo, son requeridos al modelo en la estructura funcional (Cuando esta se realice)

/**///////////////////////////////////////////////////// */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  verTabPerfil=false;//Variable de control para desplegar el contenido del perfil del cliente
  constructor() { }
  ngOnInit() {
  }
  //Metodo que le permite a las variables de control desplegar sus respectivas vistas.
  verificarTab(grupo_de_tabs){
    if (grupo_de_tabs.selectedIndex==1) {
      this.verTabPerfil=true;
    } 
  }
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
    telefono:"02008554544", fecha_nacimiento: "1987-04-11",sexo:"f"},
    usuario:{correo:"la.mil.titulos@gmail.com"}
  }
  constructor() { }
  ngOnInit() {
  }
}

/**///////////////////////////////////////////////////// */
@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.scss'],
})
export class ClientePerfilComponent implements OnInit {

  listaTipoParam: ITipoParametro[]=[
      {id:1,nombre:"Cabello",descripcion:"el cabello",fecha_creacion:"2018-03-02",estatus:"activo"},
      {id:2,nombre:"Piel",descripcion:"la piel",fecha_creacion:"2018-03-03",estatus:"activo"},
      {id:3,nombre:"Ojos",descripcion:"los ojos",fecha_creacion:"2018-03-04",estatus:"activo"}
  ];
  parametros: IParametro[]=[
      {id:1,id_tipo_parametro:1,//Cabello
      nombre:"Longitud",descripcion:"la longitud",fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:2,id_tipo_parametro:1,//Cabello
      nombre:"Tipo (emulsion epicutanea)",descripcion:"la emulsion",fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:3,id_tipo_parametro:2,//Piel
      nombre:"Textura",descripcion:"la Textura",fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:4,id_tipo_parametro:2,//Piel
      nombre:"Color",descripcion:"el color",fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:5,id_tipo_parametro:3,//Ojos
      nombre:"Color",descripcion:"el color de ojos",fecha_creacion:"2018-02-02",estatus:"activo"}
  ];

  valoresParametro: IValorParametro[]=[
      {id:1,id_parametro:2,//tipo (emulsion epicutanea)
       nombre:"Normal",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
       fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:2,id_parametro:2,//tipo (emulsion epicutanea)
      nombre:"Seco",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
      fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:3,id_parametro:2,//tipo (emulsion epicutanea)
      nombre:"Graso",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
      fecha_creacion:"2018-02-02",estatus:"activo"},
      {id:4,id_parametro:2,//tipo (emulsion epicutanea)
      nombre:"Mixto",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
      fecha_creacion:"2018-02-02", estatus:"activo"},
      {id:5,id_parametro:1,//longitud cabello
        nombre:"Largo",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
        fecha_creacion:"2018-02-02", estatus:"activo"},
      {id:6,id_parametro:1,//longitud cabello
        nombre:"Corto",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
        fecha_creacion:"2018-02-02", estatus:"activo"},
      {id:7,id_parametro:3,//textura piel
        nombre:"Lisa",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
        fecha_creacion:"2018-02-02", estatus:"activo"},
        {id:8,id_parametro:3,//textura piel
          nombre:"Aspera",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
          fecha_creacion:"2018-02-02", estatus:"activo"},
          {id:9,id_parametro:4,//color piel
            nombre:"Clara",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
            fecha_creacion:"2018-02-02", estatus:"activo"},
            {id:10,id_parametro:4,//color piel
              nombre:"Oscura",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
              fecha_creacion:"2018-02-02", estatus:"activo"},
              {id:11,id_parametro:5,//color ojos
                nombre:"Azules",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                fecha_creacion:"2018-02-02", estatus:"activo"},
                {id:12,id_parametro:5,//color ojos
                  nombre:"Verdes",descripcion:"jkjh kfhasofk fiohfoawhf klhlwaknlfwkj wfawlf awkfhawlnfwl wkhjfawhflaw wklfhawl",
                  fecha_creacion:"2018-02-02", estatus:"activo"}
  ];

  datos_a_mostrar: IParametroValorParametro[]=[];

  constructor() { }
  ngOnInit() { /*Aca se inicializa la lista de valores parametro*/
    this.parametros.forEach(elem=> {let longi=0;let arra:IValorParametro[]=[];this.valoresParametro.forEach(element => {if(element.id_parametro==elem.id){longi=arra.push(element);}});longi=this.datos_a_mostrar.push({nombre_parametro:elem,valores_parametro:arra});});
  }

  checkear(parametro){
    if (parametro.estatus=="activo")
    {parametro.estatus="inactivo";
    this.n=0;
    ///////////////////////////////////////////////BORRA UN PARAMETRO DE LA LISTA PARA MOSTRAR VALORES PARAMETROS.
    /*let borrado:IParametroValorParametro[];
    this.datos_a_mostrar.forEach(element => {
      if (element.nombre_parametro.id==parametro.id) {
        borrado=this.datos_a_mostrar.splice(this.datos_a_mostrar.indexOf(element),1);
         }
    });*/
    let b:IParametroValorParametro[];
    for (let i = 0; i < this.datos_a_mostrar.length; i++) {
      const element = this.datos_a_mostrar[i];
      if (element.nombre_parametro.id==parametro.id) {
        b=this.datos_a_mostrar.splice(this.datos_a_mostrar.indexOf(element),1);
        break;
      }
    }
    ///////////////////////////////////////////////
    } 
    else
    {parametro.estatus="activo";
    ///////////////////////////////////////////////AGREGA PARAMETROS A LA LISTA DE VALORES PARAMETROS
    let longitud=0;
    let arr:IValorParametro[]=[];
    this.valoresParametro.forEach(element => {
      if(element.id_parametro==parametro.id){longitud=arr.push(element);}});
    longitud=this.datos_a_mostrar.push({nombre_parametro:parametro,valores_parametro:arr});
    this.n=(longitud-1);
    ///////////////////////////////////////////////
    }
  }

  n=0;
  siguiente(){
    if(this.n==(this.datos_a_mostrar.length-1)){
      this.n=0;
    }
    else{
      this.n++;
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
  sexo: string;//IMPORTANTE
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
}
interface IParametro{ //Ejm: longitud
  id:number;
  id_tipo_parametro:number;
  nombre:string;
  descripcion:string;
  fecha_creacion:string;//Date
  estatus:string;
}
interface IValorParametro{ //Ejm: corto
  id:number; 
  id_parametro:number;
  nombre:string; 
  descripcion:string;//Lo agregue, pero no esta contemplado en la entidad
  fecha_creacion:string//Date; 
  estatus:string;
}
interface IParametroValorParametro{
  nombre_parametro: IParametro;
  valores_parametro: IValorParametro[];
}