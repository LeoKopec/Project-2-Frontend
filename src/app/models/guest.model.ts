
/**
 * model Guest class for mocking data from the API to the frontend
 */
 export class Guest {

    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    reservation: any;

    constructor ( first_name = '', last_name = '', email = '', phone = '', reservation = [] ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.reservation = reservation;
    }
}
