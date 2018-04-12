import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/filter';

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
  showInterfaz = true;
  width="255px";
  listas: Lista[]= [
    {
      type: 'alone',
      link: '/test',
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
          link: '/timeline',
          label: 'Timeline',
          icon: false,
          iconName: 'account_box',
        },
      ]
    },
    {
      type: 'group',
      link: '/list3',
      label: 'Atención al cliente',
      icon: true,
      iconName: 'phone',
      group: [
        {
          type: 'alone',
          link: '/reclamos',
          label: 'Reclamos',
          icon: false,
          
        },
        {
          type: 'alone',
          link: '/sugerencia',
          label: 'Sugerencias',
          icon: false,
        },
        
        {
          type: 'alone',
          link: '/inicio',
          label: 'Tipo de reclamo',
          icon: false,
        },
      ]
    },
    {
      type: 'group',
      label: 'Usuarios',
      icon: true,
      iconName: 'group',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/inicio',
          label: 'Listado',
          icon: false,
          
        },
        {
          type: 'alone',
          link: '/inicio',
          label: 'Roles',
          icon: false,
        },
      ]
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
      type: 'group',
      label: 'Promociones',
      icon: true,
      iconName: 'receipt',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/inicio',
          label: 'Difundir promoción',
          icon: false,
        },
        {
          type: 'alone',
          link: '/inicio',
          label: 'Promociones',
          icon: false,
        },
      ]
    },
    {
      type: 'alone',
      label: 'Parámetros',
      icon: true,
      iconName: 'home',
      link: '/lista',
    },
    {
      type: 'group',
      label: 'Portal Web',
      icon: true,
      iconName: 'web_asset',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/inicio',
          label: 'Diseño',
          icon: false,
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Landing',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Blog',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Galeria',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Empresa',
          icon: false,          
        },
      ]
    },
    {
      type: 'alone',
      label: 'Reportes',
      icon: true,
      iconName: 'assessment',
      link: '/lista',
    },   
    
  ];
  constructor(private route: ActivatedRoute, private router: Router) { 
    router.events.filter(event => event instanceof NavigationStart)
        .map(url => url['url'])
        .subscribe(v => {
           this.showInterfaz = (v == "/" || v == "" ) ? false : true;
        });
  }

  ngOnInit() {
    
  }
}
