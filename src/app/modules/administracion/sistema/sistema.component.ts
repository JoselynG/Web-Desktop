import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
