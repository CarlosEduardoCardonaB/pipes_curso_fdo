import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string= 'Carlos';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void{
    this.name = 'Coral';
    this.gender = 'female'
  }

  //i18n Plural
  public clients: string[] = ['Pepito', 'Fulanito', 'Menganito', 'Sutanito', 'Susanita', 'Coralita', 'Sixtinita'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name: 'Eduardo',
    age: 40,
    address: 'Cra 9 norte COL'
  }

  //Async pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap( value=> console.log('tap:', value) )
    );

    //Cuando declaramos esto ": Promise<String>" estamos diciendo que el tipo de dato es una promesa de tipo string,
    //de lo contrario no se sabría que va a retornar y perderíamos las bondades de los tipados de typescript para controlar esto
    public promiseValue: Promise<String> = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve('tenemos data en la promesa');
        console.log('se ejecutó la promesa')
      }, 3500);
    })
    //NOTA: Las promesas siguen ejecutandose asi cambiemos de ruta en la aplicación, al contrario de los observables que si se destruyen con el componente.
    //o sea que si entramos al componente de la promesa y salimos rapidamente, igual la promesa se ejecutará

}
