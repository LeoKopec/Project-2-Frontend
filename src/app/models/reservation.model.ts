import { Guest } from "./guest.model";
import { Room } from "./room.model";
import { Hotel } from "./hotel.model";


// export interface Reservation {
    export class Reservation {

    id?: number;
    guest_id: number;
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

    constructor(guest: Guest, room: Room, startDate: Date, endDate: Date, totalPrice: number, hotel: Hotel) {
        this.guest_id = guest.id;
        this.first_name = guest.first_name;
        this.last_name = guest.last_name;
        this.email = guest.email;
        this.phone = guest.number;
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