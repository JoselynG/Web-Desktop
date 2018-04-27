import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-consejo',
  templateUrl: './crear-consejo.component.html',
  styleUrls: ['./crear-consejo.component.scss']
})
export class CrearConsejoComponent implements OnInit {
categorias: any ;
enabled: Boolean = false;
verBasico: Boolean = true;
  constructor() {
    this.categorias = [
      {nombre: 'Peluqueria'},
      {nombre: 'Maquillaje'},
      {nombre: 'Todas'}
    ];
   }
   pasos() {
    this.verBasico = false;
     this.enabled = true;
   }

  ngOnInit() {
  }
  cambiarImagen(event, id) { // se llama cada vez que ocurre el evento change del file input
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => { //
      document.getElementById(id).setAttribute('src', event.target.result);
      };
    }
  }

}
