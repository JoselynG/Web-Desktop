import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class CitaService {
  url = 'cita/';
  constructor(public http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  putOrden(id, datos) {
    return this.http.put(API_URL + this.url + id, datos);
  }
  getReporteCita(anno) {
    return this.http.get(API_URL + 'reporte_cita?ano=' + anno);
  }

}
