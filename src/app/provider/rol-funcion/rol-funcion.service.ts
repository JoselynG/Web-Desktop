import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class RolFuncionService/* implements OnInit*/{

  url_rol_funcion='rol_funcion';
  //rolesF:any;
  mensaje:string="Rol actualizado exitosamente!";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) {
    //this.ngOnInit(); 
  }

  /*ngOnInit(){
    this.rolesF=[];
    this.getRolFuncion().subscribe(
      data=>{
        this.rolesF=data['data'];
      },error=>{
        console.log(error)
      }
    );
  }*/


  getRolFuncion(){
    return this.http.get(API_URL+this.url_rol_funcion);
  }
  putRolFuncion(id,rolF){
    return this.http.put(API_URL+this.url_rol_funcion+"/"+id,rolF);
  }
  postRolFuncion(rolF){
    return this.http.post(API_URL+this.url_rol_funcion,rolF);
  }


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

  putRolFuncionVarios(idR,menu):string{
    //
    let rolesF=[];
    this.getRolFuncion().subscribe(
      data=>{
        rolesF=data['data'];
        let rolF_actuales=rolesF.filter((el, i, arr)=>(el.id_rol == idR));
        let rolF_nuevos=menu.filter((el, i, arr)=>(el.activa == true));
        console.log(rolF_actuales,rolF_nuevos);
        let counter=rolF_actuales.length;
        rolF_actuales.forEach(el=>{
          let indice=rolF_nuevos.map(function(e) { return e.id; }).indexOf(el.id_funcion);
          if(indice>=0){
            if(el.estatus=="I"){
              let borrado=rolF_nuevos.splice(indice,1);
              this.actualizar(el.id,"A");
            }else{
              let borrado=rolF_nuevos.splice(indice,1);
            }
          }else{
            if(el.estatus=="A"){
              this.eliminar(el.id,"I");
            }
          }
          counter--;
        });
        if(counter==0){
          console.log(rolF_nuevos)
          rolF_nuevos.forEach(rolfn => {
            this.guardar({id_rol:idR,id_funcion:rolfn.id});
          });
        }
  
      },error=>{
        console.log(error)
      }
    );
    //
   return this.mensaje;
  }

  actualizar(id,status){
    this.putRolFuncion(id,{estatus:status}).subscribe(data=>{console.log("Actualizado");},error=>{console.log(error);});
  }
  eliminar(id,status){
    this.putRolFuncion(id,{estatus:status}).subscribe(data=>{console.log("Eliminado");},error=>{console.log(error);});
  }
  guardar(rolF){
    this.postRolFuncion(rolF).subscribe(data=>{
      this.mensaje= "Rol actualizado con exito";
    },error=>{console.log(error);});
  }

 

}




 /*this.getRolFuncion().subscribe(data=>{
      let rolF_actuales=data['data'].filter((el, i, arr)=>(el.id_rol == idR));
      let rolF_nuevos=menu.filter((el, i, arr)=>(el.activa == true));
      //
      let found=false;
      rolF_actuales.forEach(rolFA => {
        found=false;
        for (let i = 0; i < rolF_nuevos.length; i++) {
          if(rolFA.id_funcion==rolF_nuevos[i].id){
            if(rolFA.estatus=="I"){
              found=true;break;
            }else{
              let indx=rolF_nuevos.indexOf(rolF_nuevos[i]);
              rolF_nuevos[indx].activa=false;
              found=true;break;
            }
          }
        }
        if(!found){
          this.putRolFuncion(rolFA.id,{estatus:"I"}).subscribe(dataf=>{
            console.log("rol_funcion eliminada!")
          },error=>{console.log(error)});
        }
      });
      //
      let rolF_nuevos_actualizados=rolF_nuevos.filter((el, i, arr)=>(el.activa == true));
      console.log("holis",rolF_nuevos_actualizados);
      //let rolF_NAU:Array<any>=[];
      rolF_nuevos_actualizados.forEach(rolFACT => {
        rolF_actuales.forEach(element => {
          if(element.id_funcion==rolFACT.id && element.estatus=="I"){
            this.putRolFuncion(element.id,{estatus:"A"}).subscribe(datay=>{
              console.log("rol_funcion actu!");
              let index=rolF_nuevos_actualizados.indexOf(rolFACT);
              let borrado=rolF_nuevos_actualizados.splice(index,1);
              console.log(borrado);
            },error=>{console.log(error)});
          }
        });
      });
      console.log("holus",rolF_nuevos_actualizados);
      rolF_nuevos_actualizados.forEach(element2 => {
        this.postRolFuncion({id_rol:idR,id_funcion:element2.id}).subscribe(datax=>{
          console.log("rol_funcion creada!")
        },error=>{console.log(error)});
      });
      
    },error=>{console.log(error)});
    */