import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { CitaService } from '../../../../provider/cita/cita.service';
import * as moment from 'moment';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})

export class PruebaComponent implements OnInit {
    listadoCitasPrestadas = [] as any;
    dataCitas = [] as any;
    labelCitas = [] as any;
    filtroSelec = 'presente';
    filtro = [
      {value: 'presente', viewValue: 'Este año'},
      {value: 'pasado', viewValue: 'Año pasado'},
    ];
    misDatosCitas = {};

  constructor(public citaService : CitaService ) { }

ngOnInit() {
    this.getReporteCita('presente');
}
reloadChartCitas: Boolean = false;
getReporteCita(fecha) {
    this.reloadChartCitas = false;
    var fechaBusqueda: String;
    this.listadoCitasPrestadas = [];
    this.dataCitas = [];
    this.labelCitas = [];
    if (fecha == 'pasado') {
        fechaBusqueda = moment().subtract(1, 'y').format('YYYY');
    } else if (fecha == 'presente') {
        fechaBusqueda = moment().format('YYYY');
    }
    this.citaService.getReporteCita(fechaBusqueda).subscribe(
        (data) => {
            this.listadoCitasPrestadas = data['data'];
            for (let item of this.listadoCitasPrestadas) {
                this.dataCitas.push(item.citas);
                this.labelCitas.push(item.mes);
            }
            this.misDatosCitas = {
                type: 'line',
                data: {
                    labels: this.labelCitas,
                    datasets: [{
                        label: '# Citas recibidas',
                        data: this.dataCitas,
                        backgroundColor: [
                            'rgba(255, 192, 252, 0)',
                        ],
                        borderColor: [
                            'rgba(254,58,239,1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                  elements: {
                    line: {
                        tension: 0, // disables bezier curves
                    }
                }
                }
              };
            this.reloadChartCitas = true;
        }, (error) => {
            console.log(error);
        }
    )
}

}
