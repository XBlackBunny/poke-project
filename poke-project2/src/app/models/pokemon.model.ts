import { Ability } from './ability.model';

const jsonToObjectKeys = {
    'id': 'id',
    'name': 'name',
    'base_experience': 'baseExperience',
    'height': 'height',
    'order': 'order',
    'weight': 'weight',
    'is_default': 'isDefault',
    'url': 'url'
};

export class Pokemon {
    private pokemonRaw: JSON;

    id: number;
    name: string;
    baseExperience: number;
    height: number;
    order: number;
    weight: number;
    isDefault: boolean;
    abilities: Ability[];
    url: string;
    isFullLoaded: boolean;

    public constructor(json: JSON, isFullLoaded: boolean) {
        this.pokemonRaw = json;
        this.isFullLoaded = isFullLoaded;
        Object.keys(json).forEach((key) => {
            const objKey = jsonToObjectKeys[key];
            this[objKey] = json[key];
        });

        if (isFullLoaded) {
            this.abilities = [];
            json['abilities'].forEach(abilityJson => this.abilities.push(new Ability(abilityJson)));
        }
    }
}
