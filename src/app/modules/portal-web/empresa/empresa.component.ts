import { Component, OnInit } from '@angular/core';
import { TituloSeccionService } from '../../../provider/titulo-seccion/titulo-seccion.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [TituloSeccionService]
})
export class EmpresaComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string
  descripcion: string;
  idTituloEmpresa: Number;
  titulo: Ititle = {} as any;

  items=[
    {nombre:"Direccion",status:"true"},
    {nombre:"Telefono",status:"true"},
    {nombre:"Horario de trabajo",status:"true"},
    {nombre:"Mision",status:"true"},
    {nombre:"Vision",status:"true"},
    {nombre:"Objetivo",status:"false"},
    {nombre:"Redes sociales",status:"false"},
  ];

  constructor(public tituloSeccionService: TituloSeccionService) { }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'contact') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloEmpresa = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.getTituloSeccion();
  }

  putContactTitle() {
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloEmpresa, this.titulo).subscribe(data => { alert('Exito'); }, Error => { alert('Error'); });
  }
}

export interface Ititle {
  titulo: String;
  descripcion: String;
}