import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import {ValoresParametrosService} from '../../../../provider/valores-parametros/valores-parametros.service';
import {ParametrosService} from '../../../../provider/parametros/parametros.service';
import {TiposParametrosService} from '../../../../provider/tipos-parametros/tipos-parametros.service';
import { CategoriasServicioService } from '../../../../provider/categorias-servicio/categorias-servicio.service';
import { ServiciosService } from '../../../../provider/servicios/servicios.service';
import { GestionPromocionService } from '../../../../provider/gestion-promocion/gestion-promocion.service';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-config-promocion',
  templateUrl: './config-promocion.component.html',
  styleUrls: ['./config-promocion.component.scss']
})
export class ConfigPromocionComponent implements OnInit {
 // promocion: {
    id_servicio: Blob;
    nombre: Blob;
    descripcion: Blob;
    porcentaje_descuento: Blob;
    precio_promocion: number;
    imagen: String;
    fecha_inicio: any;
    fecha_fin: Date;
    estatus: String;
    fecha_creacion: Date;
    valor_parametro: any[];
   //

// Carga de Parametros
  [x: string]: any;
  consejo: Array<{id: number, nombre: string, id_tipo_parametro: number, fecha_creacion: Date }> = [];
  datoBasico: Array<{id: number, nombre: string, id_tipo_parametro: number, fecha_creacion: Date }> = [];
  listaParametro: Array<{ }> ;
  listaValor: Array<{}> = [];
  tipoparametro: any;
  listaTipoParametro: any;
  listaParametros: any ;
  listavalorparametro: any;
  //arreglo de Servicio y Categoria
  pro: any;
  servicio: any;
  input: HTMLInputElement;
  form = new FormData();
  cantidad: number;
   i: number;
    constructor(public dialog: MatDialog, public parametroServ: ParametrosService, public tipo_para_serv: TiposParametrosService,
    public valor_para_ser: ValoresParametrosService, public categoria_servicio: CategoriasServicioService, 
    public servici: ServiciosService , public gestion: GestionPromocionService, private el: ElementRef) {
      this.valor_parametro = [];

    }

  ngOnInit() {
    this.getTipoParametros();
    this.getValorParametros();
    this.getParametros();
    this.getServicios();
    this.getCategorias();
    
    this.promocion = {
      id_servicio: 0 ,
      nombre: '',
      descripcion: '',
      porcentaje_descuento: 0,
      precio_promocion: 0,
      imagen:  '',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      estatus: '',
      fecha_creacion: new Date(),
     // valor_parametro: [{id_promocion: 0, id_valor_parametro: 0}],
     valor_parametro: []
    };
   
      }

  cargarParametro(id) {
    let j = 0;
   this.listaParametro = [];
    for (let i = 0; i < this.listaParametros.length; i++) {
      if (this.listaParametros[i].id_tipo_parametro === id) {
        this.listaParametro[j] = this.listaParametros[i];
        console.log(id);
        j++;
       // console.log(this.listaParametro);
      }}
    return this.listaParametro;
  }
  cargarValorParametro(id) {
    let j = 0;
    this.listaValor = [];
    for (let i = 0; i < this.listavalorparametro.length; i++) {
        if (this.listavalorparametro[i].id_parametro === id) {
          this.listaValor[j] = this.listavalorparametro[i];
          console.log(id);
          j++;
        }
    }
  }
  guardarAtributo(data) {
    this.consejo.push(data);
    console.log(this.consejo);
  }
  guardarDatoBasico(data) {
    this.datoBasico.push(data);
    console.log(this.datoBasico);
  }
  Guardar() {
  }

// Metodos para Cargar datos (Todos)

getParametros() {
  this.parametroServ.getParametros().subscribe((resp) => {
    this.listaParametros = resp['data'];
   // console.log(this.listaParametros);
  }, (error) => {
      console.log(error);
    });


}

getTipoParametros() {
  this.tipo_para_serv.getTipoParametros().subscribe((resp) => {
    this.listaTipoParametro = resp['data'];
   // console.log(this.listaTipoParametro );
  }, (error) => {
      console.log(error);
    });
}


getValorParametros() {
  this.valor_para_ser.getValoresParametros().subscribe((resp) => {
    this.listavalorparametro = resp['data'];
    console.log(this.listavalorparametro);
  }, (error) => {
      console.log(error);
    });
}


getCategorias() {
  this.categoria_servicio.getCategorias().subscribe((resp) => {
    this.pro = resp['data'];
    console.log(this.pro);
  }, (error) => {
      console.log(error);
    });
  }

  getServicios() {
    this.servici.getServicios().subscribe((resp) => {
      this.servicio = resp['data'];
      console.log(this.servicio);
    }, (error) => {
        console.log(error);
      });
    }

    addPromocionyValores() {
     this.input = this.el.nativeElement.querySelector('#fileInput');
     this.cantidad = this.input.files.length;
     if ( this.cantidad > 0) {
     this.form.append('archivo', this.input.files.item(0));
     this.form.append('id_servicio', this.id_servicio);
     this.form.append('descripcion', this.descripcion);
     this.form.append('nombre', this.nombre);
     //this.form.append('fecha_inicio', this.fecha_inicio);
     this.form.append('porcentaje_descuento', this.porcentaje_descuento);
    }
     console.log(this.datoBasico);
      let k = 0;
      for (let index = 0; index < this.datoBasico.length; index++) {
        this.valor_parametro[k] = this.datoBasico[index].id;
       
         k++;
      }
      
      for ( this.i = 0; this.i < this.valor_parametro.length; this.i++) {
      this.form.append('valor_parametro[]', this.valor_parametro[this.i]);
     }

      console.log(this.valor_parametro);
      console.log(this.form);
      this.gestion.addPromociones(this.form).subscribe((resp) => {
        this.msj = resp['data'].message;
        console.log(this.msj);
        alert(this.msj);
      }, (error) => {
          console.log(error);
        });

     }
}
