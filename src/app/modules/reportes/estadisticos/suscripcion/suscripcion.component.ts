import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {
  filtroSelec = 'semana';
  filtro = [
    {value: 'semana', viewValue: 'Esta semana'},
    {value: 'mes', viewValue: 'Último mes'},
  ];
  misDatosSem = {
    type: 'pie',
    data: {
        labels: ["Clientes Potenciales", "Clientes"],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
              'rgba(245, 5, 194, 0.5)',
              'rgba(255, 180, 239, 0.5)',
              
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(255, 180, 239, 1)',
              
            ],
            borderWidth: 1
        }]
    },
  }
  misDatosMes = {
    type: 'pie',
    data: {
        labels: ["Clientes Potenciales", "Clientes"],
        datasets: [{
            data: [80, 20],
            backgroundColor: [
              'rgba(245, 5, 194, 0.5)',
              'rgba(255, 180, 239, 0.5)',
              
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(255, 180, 239, 1)',
              
            ],
            borderWidth: 1
        }]
    },
  }
  constructor() { }

  ngOnInit() {
  }

}
