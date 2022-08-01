import { Room } from "./room.model";

export class Hotel {

    id: number;
    name: string;
    desc: string;
    city: string;
    rate: number;
    // Derived values from the DTO
    numberRooms: number;
    lowestPrice: number;

    constructor(id = 0, name = '', desc = '', city = '', rate = 0, numberRooms = 0, lowestPrice = 0) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.city = city;
        this.rate = rate;
        this.numberRooms = numberRooms;
        this.lowestPrice = lowestPrice;
    }
}
