import { Component, OnInit } from '@angular/core';

interface TipoParametro {

  Parametros: Tpa[];
  }
  interface Tpa {
    nombre: string;
    
    }
interface Val {
  valor: string;
  descrip: string;
}
@Component({
  selector: 'app-depuraciones',
  templateUrl: './depuraciones.component.html',
  styleUrls: ['./depuraciones.component.scss']
})
export class DepuracionesComponent implements OnInit {
 
  valores: Val[] = [
    { valor: 'Notificaciones', descrip: ''
    },
    {
      valor: 'Clientes Potenciales',   descrip: ''
    },
    {
      valor: 'Solicitudes sin agendar', descrip:  ''
    },
    
    ];

  constructor() { }

  ngOnInit() {
  }

}
