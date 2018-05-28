import { OrdenServicioService } from './../../../provider/orden-servicio/orden-servicio.service';
import { GestionDetalleServicioService } from './../../../provider/gestion-detalle-servicio/gestion-detalle-servicio.service';
import { VistaOrdenCitaService } from './../../../provider/vista-orden-cita/vista-orden-cita.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiciosService } from '../../../provider/servicios/servicios.service';
import { TiposServiciosService } from '../../../provider/tipos-servicios/tipos-servicios.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
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
  datosGuardar: {
    id_orden_servicio: number;
    id_servicio_solicitado: number; 
    realizacion: boolean;
    id_tipo_incidencia: number;
    descripcion: string; 
    insumos: Array<{
      id_insumo: number;
      cantidad: number;
    }>
  }
  
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
  orden: {
    id: number;
    id_solicitud: number;
    estado: string;
    status: string;
    solicitud: number;
    id_cliente: number;
    estado_s: string;
    cliente: number;
    nombre: string;
    apellido: string;
    citas: Array<{
      id: number;
      id_orden_servicio: number;
      fecha_creacion: string;
      estatus: string;
      estado: string;
      id_agenda: number;
    }>
    empleados_asignados: Array<{
      id: number;
      id_empleado: number;
      id_orden_servicio: number;
      nombre: string;
      apellido: string
      cedula: string
      telefono: string
      direccion: string
      fecha_nacimiento: string;
      sexo: string;
    }>
    servicios_solicitados: Array<{
      id: number;
      id_servicio_solicitado: number;
      id_solicitud: number;
      nombre_servicio: string;
      tipo_servicio: string
      insumos_asociados:  Array<{
        insumo_asociado: number
        id_insumo: number;
        id_servicio: number;
        id: number;
        nombre: string;
        tipo_insumo: string
        id_tipo_insumo: number
        cantidad: number
        unidad: number
        id_unidad: number
        utilizado: number
      }>
    }>
  };
  nombreCliente: string;
  servicios: any;
  tipo: any;
  servP: boolean;
  servM: boolean;
  insumosUsados: any;
  estado: {
    estado: string
  }

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public ordenVista: VistaOrdenCitaService,
    public serviciosServ: ServiciosService,
    public tipoService: TiposServiciosService,
    public gestion: GestionDetalleServicioService,
    public ordenS: OrdenServicioService,
    
    ) { 
      this.serviciosM = []
      this.serviciosP = []
      this.datosGuardar = {
        id_orden_servicio: null,
        id_servicio_solicitado: null, 
        realizacion: true,
        id_tipo_incidencia: null,
        descripcion: '',
        insumos: []
      }
      this.estado = {
        estado: ''
      }
    }
    ngOnInit() {
      this.getOrdenInfo()
    }

    postOrden(){
      let insumoAux ={
        id_insumo: null,
        cantidad: null
      }
      for(let i=0; i<this.orden.servicios_solicitados.length; i++){

        this.datosGuardar.id_orden_servicio = this.orden.citas[0].id_orden_servicio
        this.datosGuardar.id_servicio_solicitado = this.orden.servicios_solicitados[i].id_servicio_solicitado 

        for(let j=0; j<this.orden.servicios_solicitados[i].insumos_asociados.length; j++){
          insumoAux.id_insumo = this.orden.servicios_solicitados[i].insumos_asociados[j].id_insumo;
          insumoAux.cantidad = this.orden.servicios_solicitados[i].insumos_asociados[j].utilizado;

          this.datosGuardar.insumos.push(insumoAux)  
          }       
          
      }

      this.gestion.postDetalle(this.datosGuardar).subscribe(
        (data) => {
          
          this.estado.estado = "R"
            this.ordenS.putOrden(this.orden.citas[0].id_orden_servicio, this.estado).subscribe(
              (res) => {
                this.mostrarMensajeExito()
              }, (error) => {
                console.log(error)
              }
            )
        }, (error) => {
          console.log(error)
          
        }

      )
      
    }
    mostrarMensajeExito(): void {//opens the modal
      let dialogRef = this.dialog.open(MensajeExitoComponent, {
        width: '300px',//sets the width
        height: '140px', 
        data: { msj: 'Registro realizado exitosamente' }//send this class's attributes to the modal
      });
    
      dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
        console.log('Modal closed!');
        this.router.navigate(['solicitudes']);
        //this.router.onSameUrlNavigation
        
      });  
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
