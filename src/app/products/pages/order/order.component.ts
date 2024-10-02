import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' | undefined = '';
  public hero : Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    }
  ]

  sortHeroes(order: keyof Hero){
    this.orderBy = order;
  }


  toogleUperCase():void{
    //Esta expresión de aqui abajo lo que hace es cambiar la variable y negarla. O sea si la variable está en true la vuelve false o si está en false la vuelve true.
    this.isUpperCase = !this.isUpperCase;
  }

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }

}
