import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.scss']
})
export class HistoricosComponent implements OnInit {
  filtroSelec = 'respaldar';
  registrosSeleccionados = [];
  registro1 = ['Cliente', 'Reclamos', 'Servicios'];
  filtroSelec1 = 'servicio';
  
  filtro = [
    {value: 'servicio', viewValue: 'Servicios Inactivos'},
    {value: 'promociones', viewValue: 'Promociones '},
    {value: 'reclamos', viewValue: 'Reclamos Procesados'},
    
  ];
  


  constructor() { }

  ngOnInit() {
  }

}
