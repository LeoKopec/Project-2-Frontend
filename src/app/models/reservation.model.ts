import { Guest } from "./guest.model";
import { Room } from "./room.model";
import { Hotel } from "./hotel.model";


// export interface Reservation {
export class Reservation {

    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    room_id: number;
    hotel_id: number;
    hotel: string;
    desc: string;
    city: string;
    rating?: number;
    room_name: string;
    room_size: number;
    start_date: Date;
    end_date: Date;
    total_price: number;

    constructor(guest: Guest = new Guest(), room: Room = new Room(), startDate: Date = new Date(), endDate: Date = new Date(), totalPrice: number = 0, hotel: Hotel = new Hotel()) {
        this.first_name = guest.first_name;
        this.last_name = guest.last_name;
        this.email = guest.email;
        this.phone = guest.phone;
        this.room_id = room.id;
        this.hotel_id = hotel.id;
        this.hotel = hotel.name;
        this.desc = hotel.desc;
        this.city = hotel.city;
        this.room_name = room.name;
        this.room_size = room.size;
        this.start_date = startDate;
        this.end_date = endDate;
        this.total_price = totalPrice;
    }
}