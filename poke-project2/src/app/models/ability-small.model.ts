export class Ability {
    slot: number;
    isHidden: boolean;
    url: string;
    name: string;

    constructor(json: JSON) {
        this.slot = json['slot'];
        this.isHidden = json['is_hidden'];
        Object.keys(json['ability']).forEach(key => {
            this[key] = json['ability'][key];
        });
    }
}
