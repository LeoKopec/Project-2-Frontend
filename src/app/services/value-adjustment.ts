import { Hotel } from "../models/hotel.model";

// Rounds normally, as default causes ratings to always round up
export function roundRating(hotel: Hotel): number {
    return Math.round(hotel.rate);
}