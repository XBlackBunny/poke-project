import {Component, Input} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';

@Component({
    selector:'app-pokemon-component',
    styleUrls:['./pokemon.component.css'],
    templateUrl: './pokemon.component.html'
})

export class PokemonComponent {
    @Input() pokemon: Pokemon;
}
