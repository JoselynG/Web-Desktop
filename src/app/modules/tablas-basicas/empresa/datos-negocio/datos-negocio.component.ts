import { SuscripcionComponent } from './../../../reportes/estadisticos/suscripcion/suscripcion.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NegocioService } from '../../../../provider/negocio/negocio.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-datos-negocio',
  templateUrl: './datos-negocio.component.html',
  styleUrls: ['./datos-negocio.component.scss']
})
export class DatosNegocioComponent implements OnInit {
  datosMostrar: {
    id: number;
    rif: string;
    nombre: string;
    hora_inicio_trabajo: String;
    hora_fin_trabajo: string;
    imagen: string;
    estatus: string;
    id_sistema: number;
    fecha_creacion: string; 
  };
  datosModificar: {
    id: number;
    rif: string;
    nombre: string;
    hora_inicio_trabajo: String;
    hora_fin_trabajo: string;
    imagen: string;
    estatus: string;
    id_sistema: number;
    fecha_creacion: string; 
  };
  empresa: any;
//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'Barquisimeto', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Mérida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
estado = [
  {value: 'Lara', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Mérida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
  constructor(
    public dialog: MatDialog,
    public negocio: NegocioService
  ) { 
    this.datosMostrar = {
      id: 0,
      rif: '',
      nombre: '',
      hora_inicio_trabajo: '',
      hora_fin_trabajo: '',
      imagen: '',
      estatus: '',
      id_sistema: 0,
      fecha_creacion: '',
    },
    this.datosModificar = {
      id: 0,
      rif: '',
      nombre: '',
      hora_inicio_trabajo: '',
      hora_fin_trabajo: '',
      imagen: '',
      estatus: '',
      id_sistema: 0,
      fecha_creacion: '',
    }
  }

  ngOnInit() {
    this.getEmpresa();
  }
  openDialog() {
    const dialogRef = this.dialog.open(CrearObjetivosComponent, {
      height: '300px',
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
    
  getEmpresa(){
    console.log('OK');
    this.negocio.getNegocio().subscribe(
      (data)=>{
        this.empresa =data['data'];
        this.datosMostrar = this.empresa[0];
        this.datosModificar = this.datosMostrar;
        console.log(this.empresa);
        console.log(this.datosMostrar);
      },(error) =>{
        console.log(error);
      }
    )
  }
  update(){
    console.log('ahí voy');
    this.negocio.updateNegocio(this.datosMostrar.id, this.datosModificar).subscribe(
      (data) => {
        console.log(data);
        console.log('lo hice :D');
      },(error) =>{
        console.log(error);
      } 
    )
    
  }

}





@Component({
  selector: 'app-crear-objetivos',
  templateUrl: './crear-objetivos.component.html',
  styleUrls: ['./crear-objetivos.component.scss']
})

export class  CrearObjetivosComponent implements OnInit {
  
  filtro = [
    {value: 'gral', viewValue: 'General'},
    {value: 'esp', viewValue: 'Específicos'},
    
    
  ];
constructor() { }

  ngOnInit() {

  }

  
}
