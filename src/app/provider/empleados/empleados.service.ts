import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class EmpleadosService {

  url_empleados='empleado/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getEmpleados(){
    return this.http.get(API_URL+this.url_empleados);
  }
  getEmpleado(id){
    return this.http.get(API_URL+this.url_empleados+id);
  }
  putEmpleado(id,empleado){
    return this.http.put(API_URL+this.url_empleados+id, empleado);
  }
  getEmpleadoEspecifico(id){
    return this.http.get(API_URL+this.url_empleados+id);
  }


}
