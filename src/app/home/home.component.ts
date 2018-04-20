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
          link: '/parametros',
          label: 'Categorías',
          icon: false
        },
        {
          type: 'alone',
          link: '/timeline',
          label: 'Parámetros',
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
          link: '/basedatos',
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
      type: 'group',
      label: 'Portal Web',
      icon: true,
      iconName: 'web_asset',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/disenio',
          label: 'Diseño',
          icon: false,
        },
        {
          type: 'alone',
          link: '/landing',
          label: 'Landing',
          icon: false,
        },        
        
        {
          type: 'alone',
          link: '/galeria',
          label: 'Galería',
          icon: false,
        },        
        
        {
          type: 'alone',
          link: '/empresa',
          label: 'Empresa',
          icon: false,
        },        
      ]
    
    },
    
    {
      type: 'group',
      label: 'Marketing',
      icon: true,
      iconName: 'business_center',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/servicios',
          label: 'Servicios',
          icon: false,
        },
        {
          type: 'alone',
          link: '/promociones',
          label: 'Promociones',
          icon: false,
        },        
      ]
    
    },
    {
      type: 'alone',
      label: 'Clientes',
      icon: true,
      iconName: 'group',
      link: '/clientes',
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
      type: 'alone',
      label: 'Atención al cliente',
      icon: true,
      iconName: 'call',
      link: '/atencionCliente',
    },
    {
      type: 'group',
      label: 'Reportes',
      icon: true,
      iconName: 'assessment',
      link: '/lista',
      group: [
        {
          type: 'alone',
          link: '/sdsc',
          label: 'Solicitudes',
          icon: false,
        },
        {
          type: 'alone',
          link: '/sdcdc',
          label: 'Citas',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/sdc',
          label: 'Clientes',
          icon: false,          
        },
        {
          type: 'alone',
          link: '/dcdc',
          label: 'Servicios',
          icon: false,          
        },
        
        {
          type: 'alone',
          link: '/dcdc',
          label: 'Incidencias',
          icon: false,          
        },
        
        {
          type: 'alone',
          link: '/dcdc',
          label: 'Reclamos',
          icon: false,          
        },
        
        {
          type: 'alone',
          link: '/dcdc',
          label: 'Calificaciones',
          icon: false,          
        }

      ]
    
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
