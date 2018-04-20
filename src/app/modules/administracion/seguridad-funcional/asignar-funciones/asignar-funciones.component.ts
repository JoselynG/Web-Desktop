import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignar-funciones',
  templateUrl: './asignar-funciones.component.html',
  styleUrls: ['./asignar-funciones.component.scss']
})
export class AsignarFuncionesComponent implements OnInit {
  items = [
    {descripcion: 'Consultar dashboard de negocio', estatus: 'true'},
    {descripcion: 'Consultar dashboard propio de empleado', estatus: 'true'},
    {descripcion: 'Registrar otros suarios', estatus: 'true'},
    {descripcion: 'Registrar roles', estatus: 'true'},
    {descripcion: 'Editar perfiles de usuarios', estatus: 'true'},
    {descripcion: 'Editar funciones de usuarios', estatus: 'true'},
    {descripcion: 'Agendar citas y registrar detalles de servicio', estatus: 'true'},
    {descripcion: 'Consultar todas la citas', estatus: 'true'},
    {descripcion: 'Consultar citas de empleado', estatus: 'true'},
    {descripcion: 'Registrar tipo de servicio', estatus: 'true'},
    {descripcion: 'Consultar reclamos', estatus: 'true'},
    {descripcion: 'Consultar sugerencias', estatus: 'true'},
    {descripcion: 'Responder reclamos', estatus: 'true'},
    {descripcion: 'Registrar parametros', estatus: 'true'},
    {descripcion: 'Modificar portal web', estatus: 'true'},
    {descripcion: 'Registrar informacion de empresa', estatus: 'true'},
    {descripcion: 'Consultar reportes', estatus: 'true'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
