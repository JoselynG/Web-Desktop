import { Component, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material';
import { RedSocialService } from '../../../provider/red-social/red-social.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  items=[
    {nombre:"Mostrar twitter",status:true},
    {nombre:"Mostrar notificaciones",status:true},
    {nombre:"Mostrar consejos",status:true},
    {nombre:"Mostrar servicios",status:true},
    {nombre:"Enviar correos elctrónicos",status:true} 
  ];
  opciones:{id:number;nombre:string;estatus:string;fecha_creacion:Date};

  constructor(public servicio_red_social: RedSocialService) { }

  ngOnInit() {
    this.opciones={
      id:null,
      nombre:"",
      estatus:"",
      fecha_creacion:new Date()
    };
    this.cargarOpciones();
  }

  cargarOpciones(){
    /*this.servicio_opciones.getOpciones().subscribe(data=>{
      this.opciones=data['data'];
    },error=>{console.log(error);});*/
  }

  activar_desactivar(){
    
  }

}
