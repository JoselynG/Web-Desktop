import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  items=[
    {nombre:"Direccion",status:"true"},
    {nombre:"Telefono",status:"true"},
    {nombre:"Horario de trabajo",status:"true"},
    {nombre:"Mision",status:"true"},
    {nombre:"Vision",status:"true"},
    {nombre:"Objetivo",status:"false"},
    {nombre:"Redes sociales",status:"false"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
