import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-crear-servicios',
  templateUrl: './crear-servicios.component.html',
  styleUrls: ['./crear-servicios.component.scss']
})
export class CrearServiciosComponent implements OnInit {

//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'peluqueria', viewValue: 'peluqueria'},
  {value: 'maquillale', viewValue: 'maquillaje'},
  
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
//select condiciones
condicionesSeleccionados = [];
condiciones = ['Silicón', 'condicion a', 'condiciones b', 'condiciones c'];
visible1: boolean = true;
selectable1: boolean = true;
removable1: boolean = true;
addOnBlur1: boolean = true;

// Enter, comma
separatorKeysCodes1 = [ENTER, COMMA];
condiciones1= [
{ name: 'A' },
{ name: 'B' },
{ name: 'C' },
];


add(event: MatChipInputEvent): void {
  let input = event.input;
  let value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    this.insumos.push({ name: value.trim() });
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

remove(fruit: any): void {
  let index = this.insumos.indexOf(fruit);

  if (index >= 0) {
    this.insumos.splice(index, 1);
  }
}
  constructor() { }

  ngOnInit() {
  }

}
