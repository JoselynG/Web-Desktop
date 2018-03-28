import { Component, OnInit } from '@angular/core';
interface Lista {
  type: string;
  link?: string;
  label: string;
  icon: boolean;
  iconName?: string;
  group?: Lista[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width="255px";
  listas: Lista[]= [
    {
      type: 'alone',
      link: '/inicio',
      label: 'Inicio',
      icon: true,
      iconName: 'home',
    },
    {
      type: 'group',
      label: 'Control de servicio',
      icon: true,
      iconName: 'date_range',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/inicio',
          label: 'Agenda',
          icon: false,
          iconName: 'add_shopping_cart',
        },
        {
          type: 'alone',
          link: '/test/sub2',
          label: 'Timeline',
          icon: false,
          iconName: 'account_box',
        },
      ]
    },
    {
      type: 'alone',
      link: '/list3',
      label: 'Atención al cliente',
      icon: true,
      iconName: 'phone',
    },
    {
      type: 'alone',
      label: 'Usuarios',
      icon: true,
      iconName: 'group',
      link: '/lista',
    },
    {
      type: 'alone',
      label: 'Servicios',
      icon: true,
      iconName: 'build',
      link: '/lista',
    },
    {
      type: 'alone',
      label: 'Códigos de descuento',
      icon: true,
      iconName: 'gradient',
      link: '/lista',
    },
    {
      type: 'alone',
      label: 'Promociones',
      icon: true,
      iconName: 'receipt',
      link: '/lista',
    },
    {
      type: 'alone',
      label: 'Parámetros',
      icon: true,
      iconName: 'home',
      link: '/lista',
    },
    {
      type: 'alone',
      label: 'Portal Web',
      icon: true,
      iconName: 'web_asset',
      link: '/lista',
    },
    {
      type: 'alone',
      label: 'Reportes',
      icon: true,
      iconName: 'assessment',
      link: '/lista',
    },   
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
