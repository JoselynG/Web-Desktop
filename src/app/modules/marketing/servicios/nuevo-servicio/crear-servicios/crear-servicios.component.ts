import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-crear-servicios',
  templateUrl: './crear-servicios.component.html',
  styleUrls: ['./crear-servicios.component.scss']
})
export class CrearServiciosComponent implements OnInit {

//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'Peluqueria', viewValue: 'Peluqueria'},
  {value: 'Maquillale', viewValue: 'Maquillaje'},
  
];

insumoSeleccionados = [];
insumo = ['Silicón', 'Agua Oxigenada', 'Acondicionador', 'Keratina', 'ganchos negros', 'polvo compacto', 'labial'];
visible: boolean = true;
selectable: boolean = true;
removable: boolean = true;
addOnBlur: boolean = true;

// Enter, comma
separatorKeysCodes = [ENTER, COMMA];

insumos = [
 { name: 'Champú' },
 { name: 'Tinte' },
 { name: 'Gel' },
];
  

  constructor() { }

  ngOnInit() {
  }

}
