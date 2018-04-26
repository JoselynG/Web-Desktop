import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-paso',
  templateUrl: './primer-paso.component.html',
  styleUrls: ['./primer-paso.component.scss']
})
export class PrimerPasoComponent implements OnInit {
  valor = "peluq";
  servPSelec = "corte";
  servMSelec = "maqDia";
  filtro = [
    {value: "peluq", viewValue: 'Peluquería'},
    {value: "maq", viewValue: 'Maquillaje'},
  ];

  servP = [
    {value: "corte", viewValue: 'Corte de cabello'},
    {value: "secado", viewValue: 'Secado'},
    {value: "planchado", viewValue: 'Planchado'},
    {value: "tinte", viewValue: 'Mechas'},
  ]

  servM = [
    {value: "maqDia", viewValue: 'Maquillaje de Día'},
    {value: "maqNoche", viewValue: 'Maquillaje de Noche'},
    {value: "contorno", viewValue: 'Maquillaje de contorno'},
    
  ]

  
  constructor() { }

  ngOnInit() {
  }

}
