import { VistaOrdenCitaService } from './../../../provider/vista-orden-cita/vista-orden-cita.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiciosService } from '../../../provider/servicios/servicios.service';
import { TiposServiciosService } from '../../../provider/tipos-servicios/tipos-servicios.service';
@Component({
  selector: 'app-registrar-detalle',
  templateUrl: './registrar-detalle.component.html',
  styleUrls: ['./registrar-detalle.component.scss']
})
export class RegistrarDetalleComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  servicioPSeleccionados = [];
  
  
  servicioMSeleccionados = ['Maquillaje de día'];
  
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  insumos = [
    { name: 'Champú' },
    { name: 'Tinte' },
    { name: 'Gel' },
  ];

  serviciosM: Array <{}>;
  serviciosP: Array <{}>;
  ordenId: number; 
  orden: any;
  nombreCliente: string;
  servicios: any;
  tipo: any;
  servP: boolean;
  servM: boolean;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public ordenVista: VistaOrdenCitaService,
    public serviciosServ: ServiciosService,
    public tipoService: TiposServiciosService,
    ) { 
      this.serviciosM = []
      this.serviciosP = []
      
    }
    ngOnInit() {
      this.getOrdenInfo()
    }
    getOrdenInfo(){
      ///
      this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.ordenId = id;
      });
      ///
      this.ordenVista.getOrdenCitaEspec(this.ordenId).subscribe(
        (data) => {
          this.orden = data['data']
          this.nombreCliente = this.orden.nombre + ' ' + this.orden.apellido

          for(let i=0; i<this.orden.servicios_solicitados.length; i++){
            this.serviciosServ.getServicioEspec(this.orden.servicios_solicitados[i].id).subscribe(
              (data) => {
                  this.servicios = data ['data']
                  this.tipoService.getTipoServicioEsp(this.servicios.id_tipo_servicio).subscribe(
                    (res) =>{
                        this.tipo = res ['data']
                        if(this.tipo.id_categoria_servicio === 1){
                          this.serviciosP.push(this.orden.servicios_solicitados[i])
                          this.servP = true;
                        }else if(this.tipo.id_categoria_servicio === 2){
                          this.serviciosM.push(this.orden.servicios_solicitados[i])
                          this.servM = true;
                        }
                    }, (error) => {
                            console.log(error)
                        }
                  )
              }, (error) => {
                  console.log(error)
              }
            )
          }
        }, (error) =>{
          console.log(error)
        }

      )
    }

    getServicios(){
      for(let i=0; i<this.orden.servicios_solicitados.length; i++){
        this.serviciosServ.getServicioEspec(this.orden.servicios_solicitados[i].id).subscribe(
          (data) => {
              this.servicios = data ['data']
              this.tipoService.getTipoServicioEsp(this.servicios.id_tipo_servicio).subscribe(
                (res) =>{
                    this.tipo = res ['data']
                    if(this.tipo.id_categoria_servicio === 1){
                      this.serviciosP.push(this.orden.servicios_solicitados[i])
                    }else if(this.tipo.id_categoria_servicio === 2){
                      this.serviciosM.push(this.orden.servicios_solicitados[i])
                    }
                }, (error) => {
                        console.log(error)
                    }
              )
          }, (error) => {
              console.log(error)
          }
        )
      }
      console.log(this.serviciosM)
      console.log(this.serviciosP)
    }
  openDialog(){
    const dialogRef = this.dialog.open(IncidenciaServicioComponent, {
      height: '350px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
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

  remove(servicios: any): void {
    let index = this.serviciosP.indexOf(servicios);

    if (index >= 0) {
      this.serviciosP.splice(index, 1);
    }
  }
  

}

@Component({
  selector: 'app-incidencia-servicio',
  templateUrl: './incidencia-servicio.component.html',
  styleUrls: ['./incidencia-servicio.component.scss']
})
export class IncidenciaServicioComponent {
  filtro = [
    {value: 'corte', viewValue: 'Corte de cabello'},
    {value: 'tinte', viewValue: 'Aplicación de tinte'},
    
  ];
  constructor(public dialogRef: MatDialogRef<IncidenciaServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }
  

}
