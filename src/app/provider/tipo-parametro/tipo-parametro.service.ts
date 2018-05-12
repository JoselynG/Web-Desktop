import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'

@Injectable()
export class TipoParametroService {
  listado_tipo_parametro = 'tipo_parametro'
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content -type': `application/json`,
      'Authoryzacoion': `my-auth-token`
    })
  };

  getTipoParametros() {

    return this.http.get(API_URL + this.listado_tipo_parametro);

  }

  postTipoParametros(tipoParametro) {

    return this.http.post(API_URL + 'agregar_tipo_parametro', tipoParametro);

  }
}
