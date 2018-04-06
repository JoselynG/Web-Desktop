import { Component, OnInit } from '@angular/core';

interface Detalle{
  clientName: string;
  servicios: string;
  empleado: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  detalles: Detalle []= [
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'ejecucion',
      icon: true,
      iconName: 'alarm',
      codigo: '#16445-6560'
    },
    {
      clientName: "Khal Drogo",
      servicios: "Baño de color, Marcados",
      empleado: "Qohollo",
      type: 'prestado',
      icon: true,
      iconName: 'check_circle',
      codigo: '#88554-1614'     
    },
    {
      clientName: "Dany Targaryen",
      servicios: "Marcados, Recogidos",
      empleado: "Petra Pérez",
      type: 'programado',
      icon: false,
      codigo: '#94900-2457'     
    },
  ];
  filtro = [
    {value: 'todo', viewValue: 'Todo desde hoy'},
    {value: 'citas', viewValue: 'Citas pendientes (1)'},
    {value: 'servicios', viewValue: 'Servicios prestados'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
