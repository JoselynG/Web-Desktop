import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-respaldo',
  templateUrl: './respaldo.component.html',
  styleUrls: ['./respaldo.component.scss']
})
export class RespaldoComponent implements OnInit {
  filtroSelec = 'respaldar';
  registrosSeleccionados = [];
  registro1 = ['Cliente', 'Reclamos', 'Servicios', 'Todos'];
 
 
  constructor() { }

  ngOnInit() {
  }

}
