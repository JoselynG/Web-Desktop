import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {
servicios: any;
  constructor() {
    this.servicios = [
      {
        nombre: 'Dia de la madre',
        imagen: 'assets/img/download.jpeg',
        descripcion: 'descuento de 20% para todas nuestras madres hermosas en su Dia',
      },
      {
        nombre: 'En mayo no hay fallo',
        imagen: 'assets/img/promomayo.jpg',
        descripcion: 'aplicacion de tinte especial de colores neon, lo ultimo en la moda',
      },
    ];
  }

  ngOnInit() {
  }

}
