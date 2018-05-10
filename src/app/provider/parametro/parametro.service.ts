import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'

@Injectable()
export class ParametroService {
  listado_parametro = 'parametro'
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content -type': `application/json`,
      'Authoryzacoion': `my-auth-token`
    })
  };

  getParametros() {

    return this.http.get(API_URL + this.listado_parametro);

  }

  postParametros(parametro) {
    return this.http.post(API_URL + this.listado_parametro, parametro)
  }
}
