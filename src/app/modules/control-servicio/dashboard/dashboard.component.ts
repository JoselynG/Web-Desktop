import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filtro = [
    {value: 'hoy', viewValue: 'Hoy'},
    {value: 'ayer', viewValue: 'Ayer'},
    {value: 'semana', viewValue: 'Últimos 7 días'},
    {value: 'mes', viewValue: 'Últimos 30 días'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
