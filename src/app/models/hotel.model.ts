import { Room } from "./room.model";

export class Hotel {

    id: number;
    name: string;
    description: string;
    city: string;
    rate: number;
    // Derived values from the DTO
    rooms: number;
    cheapest: number;

    constructor(id = 0, name = '', description = '', city = '', rate = 0, rooms = 0, cheapest = 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.city = city;
        this.rate = rate;
        this.rooms = rooms;
        this.cheapest = cheapest;
    }
}
