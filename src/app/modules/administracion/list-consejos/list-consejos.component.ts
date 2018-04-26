import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-consejos',
  templateUrl: './list-consejos.component.html',
  styleUrls: ['./list-consejos.component.scss']
})
export class ListConsejosComponent implements OnInit {

  consejos: any;
  constructor()  {
    this.consejos = [
    {
      nombre: 'Exfoliacion',
      imagen: 'assets/img/exfoliante.png',
      descripcion: 'Estas exfoliaciones son excelentes para tu rostro',
      codigo: '#16445-6560',
    },
    {
      nombre: 'Masaje Capilar',
      imagen: 'assets/img/masajecapilar.jpg',
      descripcion: 'Un masaje capilar que te permitira sentirte relajada y sin problemas',
      codigo: '#16445-6560',
    },
    {
      nombre: 'Promoción A',
      imagen: 'assets/img/exfoliante.png',
      descripcion: 'Estas rutinas de beleza te ayudaran a mejorar tu dia a dia',
      codigo: '#16445-6560',
    },
  ];
}

  ngOnInit() {
  }

 /* cargarConsejos() {
    this.consejosService.getConsejos().suscribe(
      (data => {
        this.consejos = data;
      }),
      (error => {
        console.log(error);
      })
    );
  }*/
}
