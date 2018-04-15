import { Component, OnInit } from '@angular/core';

interface Detalle {
  NombrePromo: string;
  servicio: string;
  descripcion: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  fechaInicio: string;
  fechaFin: String;
}

@Component({
  selector: 'app-listado-promocion',
  templateUrl: './listado-promocion.component.html',
  styleUrls: ['./listado-promocion.component.scss']
})
export class ListadoPromocionComponent implements OnInit {
/*
  detalles: Detalle [] = [
    {
      NombrePromo: 'Promoción A',
      servicio: 'Corte cabello largo',
      descripcion: 'Estes es una promocion  para el servicio de Corte de Cabello ',
      type: 'ejecucion',
      icon: true,
      iconName: 'alarm',
      codigo: '#16445-6560',
      fechaInicio: '10/04/2018',
      fechaFin: ' 10/05/2018'

    },
    {
      NombrePromo: 'Promoción B',
      servicio: 'Baño de color, Marcados',
      descripcion: 'Este es otra promocón para el servicio de Baño de Color.',
      type: 'ejecucion',
      icon: true,
      iconName: 'check_circle',
      codigo: '#88554-1614',
      fechaInicio: '10/04/2018',
      fechaFin: ' 10/05/2018',
    },
    {
      NombrePromo: 'Promoción C',
      servicio: 'Marcados, Recogidos',
      descripcion: 'Estes es otra promoción para el servicio de Marcados.',
      type: 'ejecucion',
      icon: false,
      codigo: '#94900-2457',
      fechaInicio: '10/04/2018',
      fechaFin: ' 10/05/2018'
    },
  ];
*/

  constructor() {
    }

  ngOnInit() {
  }

}
