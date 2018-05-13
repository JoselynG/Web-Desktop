import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class UsuariosService {

  url_listado_usuarios='usuario';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getUsuarios(){
    return this.http.get(API_URL+this.url_listado_usuarios);
  }
  getUsuario(id){
    return this.http.get(API_URL+this.url_listado_usuarios+'/'+id);
  }
<<<<<<< HEAD
  putUsuario(id,usuario){
    return this.http.put(API_URL+this.url_listado_usuarios+'/'+id, usuario);
  }
=======
>>>>>>> 39bf86c2afdf252f370f8e341ee3b4e2e7e5ab53

}
