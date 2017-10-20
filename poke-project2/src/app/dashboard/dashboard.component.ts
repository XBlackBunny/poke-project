import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
    selector: 'app-dashboard-pokemon',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    name = 'Angular';
    pokemon: Pokemon;
    searchValue: string;
    searchType = 'pokemon';

    opened = true;
    private _toggleSidebar() {
        this.opened = !this.opened;
    }

    constructor(private service: PokemonService) { }

    pokemonChanged(pokemon: Pokemon) {
        console.log(pokemon);
        this.pokemon = pokemon;
    }

    ngOnInit(): void {
        console.log('Hey');
    }
}
