import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class ValorParametroService {
  listado_valor_parametro = 'valor_parametro'
  constructor(public http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content -type': `application/json`,
      'Authoryzacoion': `my-auth-token`
    })
  };

  getValorParametros() {

    return this.http.get(API_URL + this.listado_valor_parametro);

  }

  postValorParametros(valorParametro) {
    return this.http.post(API_URL + this.listado_valor_parametro, valorParametro);
  }
}
