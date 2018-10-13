import { Component } from '@angular/core';
import { PokemonsService } from './pokemons.service'

@Component({
  selector: 'all-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons = {}
  mostrar : boolean = false;

  constructor(private myFirstService : PokemonsService) {
    
  }

  mostrarDetalles() {
    this.mostrar = !this.mostrar;
  }

  ngOnInit() {
    this.pokemons = this.myFirstService.getData()
  }
}