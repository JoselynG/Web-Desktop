import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../../provider/servicios/servicios.service';

@Component({
  selector: 'app-clientes-frecuentes',
  templateUrl: './clientes-frecuentes.component.html',
  styleUrls: ['./clientes-frecuentes.component.scss']
})
export class ClientesFrecuentesComponent implements OnInit {
  listadoCalificacion = [] as any;
  labelsMejor = [] as any;
  dataMejor = [] as any;

  labelsPeor = [] as any;
  dataPeor = [] as any;

  datosMejor = {};
  datosPeor = {};
  filtroSelec = 'mejor';
  filtro = [
    { value: 'mejor', viewValue: 'Mejores calificaciones promedio' },
    { value: 'menor', viewValue: 'Menores calificaciones promedio' },
  ];

  constructor(public servicioService: ServiciosService) { }

  ngOnInit() {
    this.getReporteCalificacion('mejor');
  }

  reloadChartCalificacionMas: Boolean = false;
  reloadChartCalificacionMenos: Boolean = false;
  getReporteCalificacion(order) {
    var orderBusqueda: String;
    this.reloadChartCalificacionMas = false;
    this.reloadChartCalificacionMenos = false;
    this.listadoCalificacion = [];
    this.labelsMejor = [];
    this.labelsPeor = [];
    this.dataMejor = [];
    this.dataPeor = [];
    if (order == 'mejor') {
      orderBusqueda = 'DESC'
    } else if (order == 'menor') {
      orderBusqueda = 'ASC'
    }
    var dataToPush: Number;
    this.servicioService.getReporteCalificacion(orderBusqueda).subscribe(
      (data) => {
        this.listadoCalificacion = data['data'];
        if (order == 'mejor') {
          for (let i = 0; i < 6; i++) {
            this.labelsMejor.push(this.listadoCalificacion[i].categoria_servicio + ': ' + this.listadoCalificacion[i].nombre + ' - ' + this.listadoCalificacion[i].tipo_servicio);
            if (this.listadoCalificacion[i].promedio_calificacion == 0) {
              dataToPush = 1;
            } else {
              dataToPush = this.listadoCalificacion[i].promedio_calificacion;
            }
            this.dataMejor.push(dataToPush);
            this.datosMejor = {
              type: 'horizontalBar',
              data: {
                labels: this.labelsMejor,
                datasets: [{
                  label: 'Mejores calificaciones promedio',
                  data: this.dataMejor,
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
          this.reloadChartCalificacionMas = true;
        } else if (order == 'menor') {
          for (let i = 0; i < 6; i++) {
            this.labelsPeor.push(this.listadoCalificacion[i].categoria_servicio + ': ' + this.listadoCalificacion[i].nombre + ' - ' + this.listadoCalificacion[i].tipo_servicio);
            if (this.listadoCalificacion[i].promedio_calificacion == 0) {
              dataToPush = 1;
            } else {
              dataToPush = this.listadoCalificacion[i].promedio_calificacion;
            }
            this.dataPeor.push(dataToPush);
            this.datosPeor = {
              type: 'horizontalBar',
              data: {
                labels: this.labelsPeor,
                datasets: [{
                  label: 'Menores calificaciones promedio',
                  data: this.dataPeor,
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
          this.reloadChartCalificacionMenos = true;
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

}
