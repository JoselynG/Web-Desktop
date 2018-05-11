import { Component, OnInit } from '@angular/core';
interface Servicio{
  nombre: string;
  hora: string;
}
@Component({
  selector: 'app-dashboard-full',
  templateUrl: './dashboard-full.component.html',
  styleUrls: ['./dashboard-full.component.scss']
})
export class DashboardFullComponent implements OnInit {
  filtro = [
    {value: 'hoy', viewValue: 'Hoy'},
    {value: 'ayer', viewValue: 'Ayer'},
    {value: 'semana', viewValue: 'Últimos 7 días'},
    {value: 'mes', viewValue: 'Últimos 30 días'},
    
  ];
  servicios: Servicio[] = [
    {
      nombre: 'Secado de cabello',
      hora: '8:00 AM'
    },
    {
      nombre: 'Planchado de cabello',
      hora: '9:00 AM'
    },
    {
      nombre: 'Mechas',
      hora: '10:00 AM'
    },
    {
      nombre: 'Desriz',
      hora: '8:00 AM'
    },
    {
      nombre: 'Trenzado',
      hora: '8:00 AM'
    },
    {
      nombre: 'Maquillaje de día',
      hora: '11:00 AM'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
