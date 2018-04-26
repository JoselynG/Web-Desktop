import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  items=[
    {nombre:"Twitter",status:true},
    {nombre:"Notificaciones",status:true},
    {nombre:"Consejo",status:true},
    {nombre:"Servicio",status:true},
    {nombre:"Correo",status:true}
      
  ];

  constructor() { }

  ngOnInit() {
  }

}
