import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class RolFuncionService {

  url_rol_funcion='rol_funcion';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  postRolFuncionVarios(idR,menu):string{
    menu.forEach(element => {
      if(element.activa){
        this.postRolFuncion({id_rol:idR,id_funcion:element.id}).subscribe(data=>{
          console.log("rol_funcion creado")
        },error=>{console.log(error)});
      }
    });
    return "Rol creado con éxito!";
  }
  putRolFuncionVarios(idR,menu)/*:string*/{
    //FALTA EL ACTUALIZAR ROL_FUNCION
  }

  getRolFuncion(){
    return this.http.get(API_URL+this.url_rol_funcion);
  }
  putRolFuncion(id,rolF){
    return this.http.put(API_URL+this.url_rol_funcion+"/"+id,rolF);
  }
  postRolFuncion(rolF){
    return this.http.post(API_URL+this.url_rol_funcion,rolF);
  }

}
