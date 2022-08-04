import { Guest } from "./guest.model";
import { Room } from "./room.model";


export interface Reservation {

    id: number;
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
    rating: number;
    room_name: string;
    room_size: number;
    start_date: Date;
    end_date: Date;
    total_price: number;

}