import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: any;
  constructor() {
      this.servicios = [
      {
        nombre: 'Peluqueria',
        imagen: 'assets/img/hair.jpg',
        descripcion: 'tal cosa',
      },
      {
        nombre: 'Maquillaje',
        imagen: 'assets/img/makeup.jpg',
        descripcion: 'tal cosa',
      },
    ];
  }

  ngOnInit() {
  }
   }
