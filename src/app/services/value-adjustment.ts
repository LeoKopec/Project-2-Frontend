import { Hotel } from "../models/hotel.model";

// Rounds normally, as default causes ratings to always round up
export function roundRating(hotel: Hotel): number {
    return Math.round(hotel.rate);
}

export function nightlyPrice(total: number, start: Date, end: Date) {
    // A day in milliseconds
    const day = 1000 * 60 * 60 * 24;
    const diff = end.getTime() - start.getTime();
    return total / Math.round(diff / day);
}