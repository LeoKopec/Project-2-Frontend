import { Hotel } from "./hotel.model";
import { Price } from "./price.model";

export class Room {

    id: number;
    name: string;
    size: number;
    prices: Array<number>;

    constructor(id = 0, name = '', size = 0) {
        this.id = id;
		this.name = name;
		this.size = size;
        this.prices = [];
    }
}
