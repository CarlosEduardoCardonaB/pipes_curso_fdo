import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';



@NgModule({
 exports:[
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToastModule
  ]
})
export class PrmieNgModule { }
