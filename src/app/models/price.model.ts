import { Room } from "./room.model";

export class Price {

    room: Room;
    day: Date;
    price: number;

    constructor(room: Room, day: Date, price: number) {
        this.room = room;
        this.day = day;
        this.price = price;
    }
}