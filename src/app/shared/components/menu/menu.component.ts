import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] | undefined;
  ngOnInit(): void {
    this.menuItems = [
      { label: 'Pipes de angular',
        icon: PrimeIcons.DESKTOP,
        items:[
          {
            label: 'Textos y fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon'
          },

        ]

      },
      { label: 'Pipes personalizados',
        icon: PrimeIcons.COG,
        items:[
          {
            label: 'Otro elemento',
            icon: PrimeIcons.COG
          }
        ]
      }
  ];
  }

}
