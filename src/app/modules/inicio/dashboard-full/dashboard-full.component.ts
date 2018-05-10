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
      nombre: 'María Pérez',
      hora: '8:00 AM'
    },
    {
      nombre: 'Carla López',
      hora: '9:00 AM'
    },
    {
      nombre: 'Mario Hernández',
      hora: '10:00 AM'
    },
    {
      nombre: 'Beatriz Peraza',
      hora: '11:00 AM'
    },
    {
      nombre: 'Lucas Torres',
      hora: '2:00 PM'
    },
    {
      nombre: 'Lucia Castañeda',
      hora: '5:00 PM'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
