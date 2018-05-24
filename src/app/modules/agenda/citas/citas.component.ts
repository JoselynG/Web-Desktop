import { VistaOrdenCitaService } from './../../../provider/vista-orden-cita/vista-orden-cita.service';
import { RazonIncidenciaService } from './../../../provider/razon-incidencia/razon-incidencia.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TipoIncidenciaService } from '../../../provider/tipo-incidecia/tipo-incidencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  orden: any;
  atender: boolean
  constructor(
    public dialog: MatDialog, 
    public vistaOrden: VistaOrdenCitaService,
    private router: Router, private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getOrden();
  }

  getOrden(){
    this.vistaOrden.getOrdenCita().subscribe(
      (data) => {
        this.orden = data['data']
        
        for(let i=0; i<this.orden.length; i++){
          
          if(this.orden[i].estado === "E"){
            this.atender = true;
          }else {
            this.atender = false;
          }
        }
        
      
      }
    )
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //  this.dataSource.filter = filterValue;
  }

  irARegistro(cli) {
    this.router.navigate(['registrarDetalle/'+cli.id], { relativeTo: this.route });
 }

  openDialog(agenda){
    const dialogRef = this.dialog.open(CancelarCitaComponent, {
      height: '600px',
      width: '500px',
      data: {cita: agenda}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
 }
 /*openDialogIncidencia(){
  const dialogRef = this.dialog.open(IncidenciaCitaComponent, {
    height: '600px',
    width: '500px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado incidencia');
  });
}*/
}


@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss']
})
export class CancelarCitaComponent  {
  tipo: Array<{
    value: number,
    viewValue: string
  }>
  incidencia:  Array<{
    id: number
    id_razon_incidencia: number
    nombre: string
    fecha_creacion: string
    estatus: string
  }>;
  incidenciaAux: Array<{
    id: number
    id_razon_incidencia: number
    nombre: string
    fecha_creacion: string
    estatus: string
  }>;
  cita: any;
  razon: any;
  razonSelec: number;
  nombreCliente: string


  constructor(public tipoInc: TipoIncidenciaService,
    public razonServ: RazonIncidenciaService,
    public dialogRef: MatDialogRef<CancelarCitaComponent>,
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.tipo = []
    this.cita = data.cita
    this.incidencia = []
    this.incidenciaAux = []
    this.nombreCliente = this.cita.nombre + ' ' + this.cita.apellido
    
  } 
  
  ngOnInit() {
  //  this.getTipoIncidencia();
    this.getRazon()
  }

  //se ejecuta al seleccionar la razón para poder conseguir los tipos de esa razón
  getTipoIncidencia(){
    this.tipoInc.getTipoIncidencia().subscribe(
    (data)=>{
      this.incidencia = data['data']
      this.incidenciaAux = []
      for(let i = 0; i <this.incidencia.length; i++){
        if(this.incidencia[i].id_razon_incidencia === this.razonSelec){
          this.incidenciaAux.push(this.incidencia[i])
        }
      }
    },(error) => {
      console.log(error);
    }
    )
  }

  getRazon(){
    this.razonServ.getRazonInc().subscribe(
      (data) => {
        this.razon = data['data']
      }, (error) => {
        console.log(error);
      }
    )
  }
}

@Component({
  selector: 'app-incidencia-cita',
  templateUrl: './incidencia-cita.component.html',
  styleUrls: ['./incidencia-cita.component.scss']
})
export class IncidenciaCitaComponent  {}
