import { Component, OnInit } from '@angular/core';
import { ServicioSolicitadoService } from '../../../../provider/servicio-solicitado/servicio-solicitado.service';
import * as moment from 'moment';
import { EmpleadosService } from '../../../../provider/empleados/empleados.service';

@Component({
  selector: 'app-servicios-atendidos',
  templateUrl: './servicios-atendidos.component.html',
  styleUrls: ['./servicios-atendidos.component.scss'],
  providers: [ServicioSolicitadoService, EmpleadosService]
})
export class ServiciosAtendidosComponent implements OnInit {
  listadoServicioSolicitado = [] as any;

  labelsMas = [] as any;
  dataMas = [] as any;

  labelsMenos = [] as any;
  dataMenos = [] as any;

  filtroSelec = 'mas';
  filtro = [
    { value: 'mas', viewValue: 'Servicios más solicitados' },
    { value: 'menos', viewValue: 'Servicios menos solicitados' },
  ];

  filtroMesSelec = 'semana';
  filtroMes = [
    { value: 'semana', viewValue: 'Esta semana' },
    { value: 'mes', viewValue: 'Último mes' },
    { value: 'trimes', viewValue: 'Último trimestre' },
    { value: 'seismes', viewValue: 'Último semestre' },
    { value: 'anno', viewValue: 'Último año' },
  ];

  datosMas = {};
  datosMenos = {};

  constructor(public servicioSolicitadoService: ServicioSolicitadoService, public empleadoService: EmpleadosService) {

  }
  reloadChartMas: Boolean = false;
  reloadChartMenos: Boolean = false;

  getServicioSolicitado(fecha, order) {
    this.reloadChartMas = false;
    this.reloadChartMenos = false;
    var fechaBusqueda: String;
    var orderBusqueda: String;
    this.listadoServicioSolicitado = [];
    this.labelsMas = [];
    this.labelsMenos = [];
    this.dataMas = [];
    this.dataMenos = [];
    if (fecha == 'semana') {
      fechaBusqueda = moment().subtract(7, 'd').format('DD-MM-YYYY');
    } else if (fecha == 'mes') {
      fechaBusqueda = moment().subtract(1, 'M').format('DD-MM-YYYY');
    } else if (fecha == 'trimes') {
      fechaBusqueda = moment().subtract(3, 'M').format('DD-MM-YYYY');
    } else if (fecha == 'seismes') {
      fechaBusqueda = moment().subtract(6, 'M').format('DD-MM-YYYY');
    } else if (fecha == 'anno') {
      fechaBusqueda = moment().subtract(1, 'y').format('DD-MM-YYYY');
    }

    if (order == 'mas') {
      orderBusqueda = 'DESC'
    } else if (order == 'menos') {
      orderBusqueda = 'ASC'
    }

    this.servicioSolicitadoService.getServicioSolicitadoReporte(fechaBusqueda, moment().format('DD-MM-YYYY'), orderBusqueda).subscribe(
      (data) => {
        this.listadoServicioSolicitado = data['data'];
        if (order == 'mas') {
          for (let i = 0; i < 6; i++) {
            this.labelsMas.push(this.listadoServicioSolicitado[i].nombre_servicio + ' - ' + this.listadoServicioSolicitado[i].tipo_servicio);
            this.dataMas.push(this.listadoServicioSolicitado[i].count);
            this.datosMas = {
              type: 'horizontalBar',
              data: {
                labels: this.labelsMas,
                datasets: [{
                  label: 'Servicios más solicitados',
                  data: this.dataMas,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                  ],
                  borderColor: [
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
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
            }
          }
          this.reloadChartMas = true;
        } else if (order == 'menos') {
          for (let i = 0; i < 6; i++) {
            this.labelsMenos.push(this.listadoServicioSolicitado[i].nombre_servicio + ' - ' + this.listadoServicioSolicitado[i].tipo_servicio);
            this.dataMenos.push(this.listadoServicioSolicitado[i].count);
            this.datosMenos = {
              type: 'horizontalBar',
              data: {
                labels: this.labelsMenos,
                datasets: [{
                  label: 'Servicios menos solicitados',
                  data: this.dataMenos,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                  ],
                  borderColor: [
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
                    'rgba(254,58,239,1)',
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
          }
          this.reloadChartMenos = true;
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getServicioSolicitado('semana', 'mas');
  }


}
