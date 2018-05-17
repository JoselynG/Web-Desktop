import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class TipoRespSolicitudService {
  url: String = '/';
  constructor(public http: HttpClient) { }
  getTipoRespSolicitud(){
    return this.http.get(API_URL+this.url);
  }
}
