import { ListaInsumosComponent } from './../lista-insumos/lista-insumos.component';
import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatDialog, MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.scss']
})
export class ListaServiciosComponent implements OnInit {
  //selec nuevo servicio
  filtroSelec = '';
  filtro = [
    {value: 'peluquria', viewValue: 'peluqueria'},
    {value: 'maquillaje', viewValue: 'maquillaje'},
    {value: 'todos', viewValue: 'todos'}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialogEditar(){
    const dialogRef = this.dialog.open(EditarServicioComponent, {
      height: '500px',
      width: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  
  }
  openDialog(){
    const dialogRef = this.dialog.open(CrearServicioComponent, {
      height: '500px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
}


@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
  
    // Add our ListaInsumosComponent
    if ((value || '').trim()) {
      this.insumos.push({ name: value.trim() });
    }
  
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  
  remove(ListaInsumosComponent: any): void {
    let index = this.insumos.indexOf(ListaInsumosComponent);
  
    if (index >= 0) {
      this.insumos.splice(index, 1);
    }
  }
}


@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.scss']
})
export class EditarServicioComponent implements OnInit {
 //selec Editar servicio
  filtroSelec = '';
  filtro = [
    {value: 'peluqueria', viewValue: 'Peluqueria'},
    {value: 'maquillale', viewValue: 'Maquillaje'},
    
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

 add(event: MatChipInputEvent): void {
  let input = event.input;
  let value = event.value;

  // Add our ListaInsumosComponent
  if ((value || '').trim()) {
    this.insumos.push({ name: value.trim() });
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

remove(ListaInsumosComponent: any): void {
  let index = this.insumos.indexOf(ListaInsumosComponent);

  if (index >= 0) {
    this.insumos.splice(index, 1);
  }
}
  constructor() { }

  ngOnInit() {
  }

}