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
      link: '/dashboard',
      label: 'Inicio',
      icon: true,
      iconName: 'home',
    },
    {
      type: 'group',
      label: 'Tablas básicas',
      icon: true,
      iconName: 'dns',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/inicio',
          label: 'Maestros',
          icon: false,
          iconName: 'add_shopping_cart',
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Parámetros',
          icon: false
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Categorías',
          icon: false
        },
      ]
    },
    {
      type: 'group',
      link: '/list3',
      label: 'Administración',
      icon: true,
      iconName: 'settings',
      group: [
        {
          type: 'alone',
          link: '/',
          label: 'Portal Web',
          icon: false,
        },
        {
          type: 'alone',
          link: '/',
          label: 'Sistema',
          icon: false,
        },        
        {
          type: 'alone',
          link: '/',
          label: 'Seguridad funcional',
          icon: false,
        },        
        {
          type: 'alone',
          link: '/',
          label: 'Base de datos',
          icon: false,
        },        
        {
          type: 'alone',
          link: '/',
          label: 'Consejos',
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
      label: 'Promociones',
      icon: true,
      iconName: 'receipt',
      link: '/lista',
    
    },
    {
      type: 'alone',
      label: 'Clientes',
      icon: true,
      iconName: 'group',
      link: '/lista',
    },
    {
      type: 'group',
      label: 'Agenda',
      icon: true,
      iconName: 'date_range',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/solicitudes',
          label: 'Solicitudes',
          icon: false,
        },
        {
          type: 'alone',
          link: '/citas',
          label: 'Citas',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/ordenes',
          label: 'Órdenes de servicio',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/reclamosOrdenes',
          label: 'Reclamos',
          icon: false,          
        }
      ]
    },
    {
      type: 'group',
      label: 'Atención al cliente',
      icon: true,
      iconName: 'call',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/sugerencias',
          label: 'Sugerencias',
          icon: false,
        },
        {
          type: 'alone',
          link: '/reclamos',
          label: 'Reclamos',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/opiniones',
          label: 'Opiniones',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/dudas',
          label: 'Dudas',
          icon: false,          
        }
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
