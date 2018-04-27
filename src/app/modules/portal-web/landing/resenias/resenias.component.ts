import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.scss']
})
export class ReseniasComponent implements OnInit {
servicios: any;
  constructor() {
    this.servicios = [
      {
        nombre: 'Dia de la madre',
        imagen: 'assets/img/exfoliante.jpeg',
        descripcion: 'descuento de 20% para todas nuestras madres hermosas en su Dia',
      },
      {
        nombre: 'En mayo no hay fallo',
        imagen: 'assets/img/masajecapilar.jpg',
        descripcion: 'aplicacion de tinte especial de colores neon, lo ultimo en la moda',
      },
    ];
   }

  ngOnInit() {
  }

}
