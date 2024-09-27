import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrmieNgModule } from '../prmie-ng/prmie-ng.module';
import { MenuComponent } from './components/menu/menu.component';





@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrmieNgModule,

  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
