import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

heroes: string[] = ['Spiderman','Ironman','Hulk','Thor']; 
retorno: string = ''

borrarHeroe (){

 this.retorno = this.heroes.shift() || '';


}


}


