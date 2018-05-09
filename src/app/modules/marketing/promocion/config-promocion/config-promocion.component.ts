import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import {ValoresParametrosService} from '../../../../provider/valores-parametros/valores-parametros.service';
import {ParametrosService} from '../../../../provider/parametros/parametros.service';
import {TiposParametrosService} from '../../../../provider/tipos-parametros/tipos-parametros.service';
@Component({
  selector: 'app-config-promocion',
  templateUrl: './config-promocion.component.html',
  styleUrls: ['./config-promocion.component.scss']
})
export class ConfigPromocionComponent implements OnInit {
  
  [x: string]: any;
  consejo: Array<{}> = [];
  datoBasico: Array<{}> = [];
  listaParametro: Array<{ }> ;
  listaValor: Array<{}> = [];
  tipoparametro: any;
  
  listaTipoParametro: any;
  listaParametros: any ;
  listavalorparametro: any;
  
  constructor(public dialog: MatDialog, public parametroServ: ParametrosService, public tipo_para_serv: TiposParametrosService,
    public valor_para_ser: ValoresParametrosService) {
  

    }

  ngOnInit() {
    this.getTipoParametros();
    this.getValorParametros();
    this.getParametros();
   
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
      }
      
    }
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

//Metodos para Cargar datos

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

}
