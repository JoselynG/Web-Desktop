import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  items=[
    {nombre:"Twitter",status:"true"},
    {nombre:"Notificaciones",status:"true"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
