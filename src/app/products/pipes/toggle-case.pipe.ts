import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class toggleCasePipe implements PipeTransform {
  //El value:string nos indica que dato es el que vamos a transformar con este pipe. Por ejemplo {{ Eduardo | toggleCase}} -> la salida sería EDUARDO
  //La parte ...args:any[] nos indica que puede recibir varios argumentos agrupados de tipo any
  //transform(value: string, ...args: any[]): string {

  //al declarar el "toUpper: boolean = false" este segundo argumento que es un boleano se convierte en opcional solo por asignarle el valor false
  transform(value: string, toUpper: boolean = false): string {
    //console.log(toUpper);
    return (toUpper) ? value.toUpperCase(): value.toLocaleLowerCase();
  }
}
