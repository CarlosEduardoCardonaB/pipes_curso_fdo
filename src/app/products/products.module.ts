import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrmieNgModule } from '../prmie-ng/prmie-ng.module';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    productsRoutingModule,
    PrmieNgModule
  ]
})
export class ProductsModule { }
