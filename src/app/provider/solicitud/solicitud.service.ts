
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class SolicitudService {
  url: String = 'solicitud/';

  constructor(public http: HttpClient) { }
  getSolicitud(){
    return this.http.get(API_URL+this.url);
  }
}
