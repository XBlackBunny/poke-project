export class Ability {
    slot: number;
    isHidden: boolean;
    url: string;
    name: string;
    id: number;
    is_main_series: boolean;
    caption: string;
    flavor_text_entrie: string;
    abilityRaw: JSON;

    constructor(json: JSON) {
        this.abilityRaw = json;
        this.slot = json['slot'];
        this.isHidden = json['is_hidden'];
        Object.keys(json['ability']).forEach(key => {
            this[key] = json['ability'][key];
        });
    }
}
