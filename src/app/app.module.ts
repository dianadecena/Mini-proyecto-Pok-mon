import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonsService} from './pokemons.service'
import { AppRoutingModule } from "./app-routing.module";

import { PokemonListComponent } from "./pokemon/pokemon-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
