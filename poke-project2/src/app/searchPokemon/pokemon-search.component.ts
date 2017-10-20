import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
    selector: 'app-pokemon-search',
    templateUrl: './pokemon-search.component.html',
    styleUrls: ['./pokemon-search.component.css'],
})

export class PokemonSearchComponent implements OnInit {
    searchValue: string = "";
    pokemons: Pokemon[] = [];
    timeout = null;
    @Output() pokemonChange: EventEmitter<Pokemon> = new EventEmitter();

    constructor(private service: PokemonService) { }

    search(value: string) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            value = value.trim();
            if (value !== "" && value.length > 2) {
                this.pokemons = this.service.searchPokemon(value);
            }
        }, 500);

    }

    selectionChanged(pokemon: any) {
        this.service.getPokemonByName(pokemon.name).then(poke => {
            if (poke != undefined && poke != null) {
                this.pokemonChange.emit(poke);
            }
        });
    }

    ngOnInit() {
        this.service.getAllPokemon().then(res => console.log(res));
    }
}
