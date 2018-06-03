import { Component, OnInit } from '@angular/core';
import { ReclamoService } from '../../../../provider/reclamo/reclamo.service';
import * as moment from 'moment';

@Component({
    selector: 'app-reclamos',
    templateUrl: './reclamos.component.html',
    styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {
    listadoReporteReclamos = [] as any;
    dataNumeroReclamos = [] as any;
    dataNumeroReclamosAprobados = [] as any;
    dataNumeroReclamosRechazados = [] as any;
    dataNumeroReclamosPendientes = [] as any;

    filtroSelec = 'semana';
    filtro = [
        { value: 'semana', viewValue: 'Esta semana' },
        { value: 'mes', viewValue: 'Último mes' },
        { value: 'trimes', viewValue: 'Último trimestre' },
        { value: 'seismes', viewValue: 'Último semestre' },
        { value: 'anno', viewValue: 'Último año' },
    ];
    misDatos = {};

    constructor(public reclamoService: ReclamoService) { }

    ngOnInit() {
        this.getReporteReclamos('semana');
    }
    reloadChart: Boolean = false;
    getReporteReclamos(fecha) {
        this.reloadChart = false;
        console.log('aqui');
        var fechaBusqueda: String;
        this.listadoReporteReclamos = [];
        this.dataNumeroReclamos = [];
        this.dataNumeroReclamosAprobados = [];
        this.dataNumeroReclamosRechazados = [];
        this.dataNumeroReclamosPendientes = [];
        
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

        this.reclamoService.getReporteReclamo(fechaBusqueda, moment().format('DD-MM-YYYY')).subscribe(
            (data) => {
                this.listadoReporteReclamos = data['data'];
                for (let item of this.listadoReporteReclamos) {
                    this.dataNumeroReclamos.push(item.reclamos);
                    this.dataNumeroReclamosAprobados.push(item.aprobados);
                    this.dataNumeroReclamosRechazados.push(item.rechazados);
                    this.dataNumeroReclamosPendientes.push(item.pendientes);
                }
                this.misDatos = {
                    type: 'bar',
                    data: {
                        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
                        datasets: [{
                            label: 'Número total de reclamos',
                            data: this.dataNumeroReclamos,
                            backgroundColor: [
                                'rgba(253, 0, 135, 0.5)',
                                'rgba(253, 0, 135, 0.5)',
                                'rgba(253, 0, 135, 0.5)',
                                'rgba(253, 0, 135, 0.5)',
                                'rgba(253, 0, 135, 0.5)',
                                'rgba(253, 0, 135, 0.5)',
                                'rgba(253, 0, 135, 0.5)',
                            ],
                            borderColor: [
                                'rgba(253, 0, 135, 1)',
                                'rgba(253, 0, 135, 1)',
                                'rgba(253, 0, 135, 1)',
                                'rgba(253, 0, 135, 1)',
                                'rgba(253, 0, 135, 1)',
                                'rgba(253, 0, 135, 1)',
                                'rgba(253, 0, 135, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Número de reclamos aprobados',
                            data: this.dataNumeroReclamosAprobados,
                            backgroundColor: [
                                'rgba(0, 101, 255, 0.5)',
                                'rgba(0, 101, 255, 0.5)',
                                'rgba(0, 101, 255, 0.5)',
                                'rgba(0, 101, 255, 0.5)',
                                'rgba(0, 101, 255, 0.5)',
                                'rgba(0, 101, 255, 0.5)',
                                'rgba(0, 101, 255, 0.5)',
                            ],
                            borderColor: [
                                'rgba(0, 101, 255, 1)',
                                'rgba(0, 101, 255, 1)',
                                'rgba(0, 101, 255, 1)',
                                'rgba(0, 101, 255, 1)',
                                'rgba(0, 101, 255, 1)',
                                'rgba(0, 101, 255, 1)',
                                'rgba(0, 101, 255, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Número de reclamos rechazados',
                            data: this.dataNumeroReclamosRechazados,
                            backgroundColor: [
                                'rgba(48, 63, 159, 0.5)',
                                'rgba(48, 63, 159, 0.5)',
                                'rgba(48, 63, 159, 0.5)',
                                'rgba(48, 63, 159, 0.5)',
                                'rgba(48, 63, 159, 0.5)',
                                'rgba(48, 63, 159, 0.5)',
                                'rgba(48, 63, 159, 0.5)',
                            ],
                            borderColor: [
                                'rgba(48, 63, 159, 1)',
                                'rgba(48, 63, 159, 1)',
                                'rgba(48, 63, 159, 1)',
                                'rgba(48, 63, 159, 1)',
                                'rgba(48, 63, 159, 1)',
                                'rgba(48, 63, 159, 1)',
                                'rgba(48, 63, 159, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Número de reclamos pendientes',
                            data: this.dataNumeroReclamosPendientes,
                            backgroundColor: [
                                'rgba(171, 241, 138, 0.5)',
                                'rgba(171, 241, 138, 0.5)',
                                'rgba(171, 241, 138, 0.5)',
                                'rgba(171, 241, 138, 0.5)',
                                'rgba(171, 241, 138, 0.5)',
                                'rgba(171, 241, 138, 0.5)',
                                'rgba(171, 241, 138, 0.5)',
                            ],
                            borderColor: [
                                'rgba(171, 241, 138, 1)',
                                'rgba(171, 241, 138, 1)',
                                'rgba(171, 241, 138, 1)',
                                'rgba(171, 241, 138, 1)',
                                'rgba(171, 241, 138, 1)',
                                'rgba(171, 241, 138, 1)',
                                'rgba(171, 241, 138, 1)'
                            ],
                            borderWidth: 1
                        },
                        ]
                    },
                    options: {

                    }
                };                
                console.log(this.listadoReporteReclamos);
                this.reloadChart = true;
            }, (error) => {
                console.log(error);
            }
        )
    }

}
