import { Guest } from "./guest.model";
import { Room } from "./room.model";


export class Reservation {

    id: number;
    guest: Guest;
    room: Room;
    start_date: Date;
    end_date: Date;
    total_price: number;
    
    constructor(id = 0, guest = new Guest(), room = new Room(), start_date = new Date(), end_date = new Date(), total_price = 0) {
        this.id = id;
		this.guest = guest;
		this.room = room;
		this.start_date = start_date;
		this.end_date = end_date;
		this.total_price = total_price;
    }
}