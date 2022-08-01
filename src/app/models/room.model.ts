import { Hotel } from "./hotel.model";

export class Room {

    id: number;
    hotel: Hotel;
    name: string;
    size: number;

    constructor(id = 0, hotel = new Hotel(), name = '', size = 0) {
        this.id = id;
		this.hotel = hotel;
		this.name = name;
		this.size = size;
    }
}
