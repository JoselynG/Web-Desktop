import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  titulo_seccion:ITitulo_Seccion={titulo:"Galeria de imagenes",descripcion:"Descripcion de galeria de imagenes"};

  imagenes:IImagen[]=[
    {
      titulo:"titulo 1", imagen:"/assets/img/perfil.jpg", descripcion:"descripcion 1"
    },
    {
      titulo:"titulo 2", imagen:"/assets/img/perfil.jpg", descripcion:"descripcion 2"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  agregarImagen(imag,titu,descr) { // se llama cada vez que ocurre el evento change del file input
    if (imag && imag[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(imag[0]); //lee el archivo como datos del url
      reader.onload = (event:any) => { //se llama una vez que se lea del url
        this.imagenes.push({titulo:titu,imagen:event.target.result,descripcion:descr});
      }
    }
  }

}

interface IImagen{
  id?:number;
  id_sistema?:number;
  titulo:string;
  imagen:string;
  descripcion:string;
  estatus?:string;
}
interface ITitulo_Seccion{
  id?:number;
  id_sistema?:number;
  titulo:string;
  descripcion:string;
  boton?:string;
  estatus?:string;
}