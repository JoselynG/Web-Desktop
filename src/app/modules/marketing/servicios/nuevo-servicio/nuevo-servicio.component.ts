import { Component, OnInit } from '@angular/core';
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
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.scss']
})
export class NuevoServicioComponent implements OnInit {
  ser: {
    id_servicio: number;
    nombre: String;
    descripcion: String;
    duracion:number;
    precio: number;
    imagen: string;
    estatus: String;
    fecha_creacion: Date;
    //valor_parametro: Array<{id_promocion: number , id_valor_parametro: number}>;
    valor_parametro: number[];
    };

  promocion: {
    id_servicio: number;
    nombre: String;
    descripcion: String;
    porcentaje_descuento: number;
    precio_promocion: String;
    imagen: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estatus: String;
    fecha_creacion: Date;
    //valor_parametro: Array<{id_promocion: number , id_valor_parametro: number}>;
    valor_parametro: number[];
    };

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
  prueba: number;
  constructor(public dialog: MatDialog, public parametroServ: ParametrosService, public tipo_para_serv: TiposParametrosService,
    public valor_para_ser: ValoresParametrosService, public categoria_servicio: CategoriasServicioService, 
    public servici: ServiciosService , public gestion: GestionPromocionService ) {
  

    }

  ngOnInit() {
    this.getTipoParametros();
    this.getValorParametros();
    this.getParametros();
    this.getServicios();
    this.getCategorias();
   
    this.promocion = {
      id_servicio: 0,
      nombre: '',
      descripcion: '',
      porcentaje_descuento: 0,
      precio_promocion: '',
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

//Metodos para Cargar datos (Todos)

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
      console.log(this.promocion);
      this.promocion.estatus = 'A';
      // Para imprimir el arreglo que tiene los valores seleccionados si lo hace
      console.log(this.datoBasico);
      let k = 0;
      // carga el arreglo del objeto con los valores seleccionados de la vista
      for (let index = 0; index < this.datoBasico.length; index++) {
        this.promocion.valor_parametro[k] = this.datoBasico[index].id;
        
       k++;
      }
      this.gestion.addPromociones(this.promocion).subscribe((resp) => {
        this.msj = resp['data'].message;
        console.log(this.msj);
        alert(this.msj);
      }, (error) => {
          console.log(error);
        });

     }


    addServicioyValores() {
      console.log(this.ser);
      this.ser.estatus = 'A';
      // Para imprimir el arreglo que tiene los valores seleccionados si lo hace
      console.log(this.datoBasico);
      let k = 0;
      // carga el arreglo del objeto con los valores seleccionados de la vista
      for (let index = 0; index < this.datoBasico.length; index++) {
        this.ser.valor_parametro[k] = this.datoBasico[index].id;
        
       k++;
      }
  /*    this.gestion.addServicio(this.ser).subscribe((resp) => {
        this.msj = resp['data'].message;
        console.log(this.msj);
        alert(this.msj);
      }, (error) => {
          console.log(error);
        });
*/
     }

}
