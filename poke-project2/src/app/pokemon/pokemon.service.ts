import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {
    private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
    private headers = new Headers({ 'Accept': 'application/json' });
    private pokemons: Pokemon[];

    constructor(
        private http: Http
    ) { }

    searchPokemon(name: string): Pokemon[] {
        if (name == "/all")
            return this.pokemons;
        return this.pokemons
            .filter(pokemon =>
                pokemon.name.includes(name)
            );
    }

    getPokemonByName(name: string): Promise<Pokemon> {
        const pokemon = this.pokemons.find(poke => poke.name == name);
        if (pokemon != null && pokemon !== undefined && pokemon.isFullLoaded) {
            return new Promise<Pokemon>((resolve, reject) => { resolve(pokemon); });
        } else if (!pokemon.isFullLoaded) {
            return this.getSinglePokemon(pokemon.url);
        } else {
            const url = `${this.pokemonUrl}${name}/`;
            return this.getSinglePokemon(url);
        }
    }

    private getSinglePokemon(url: string): Promise<Pokemon> {
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(res => {
                if (res.status != 404) {
                    const pokemon = new Pokemon(res.json(), true);
                    this.pokemons[this.pokemons
                        .findIndex(poke => poke.name == pokemon.name)] = pokemon;
                    return pokemon;
                }
                return null;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    getAllPokemon(): Promise<Pokemon[]> {
        this.pokemons = [];
        const url = `${this.pokemonUrl}?limit=100`
        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(res => {
                res.json()['results']
                    .forEach(element =>
                        this.pokemons.push(new Pokemon(element, false)));
                console.log("pokemons fully loaded");
                return this.pokemons;
            })
            .catch(this.handleError);
    }
}
