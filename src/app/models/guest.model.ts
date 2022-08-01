
/**
 * model Guest class for mocking data from the API to the frontend
 */
 export class Guest {

    id: number;
    first_name: string;
    last_name: string;
    email: string;
    number: string;

    constructor ( id = 0, first_name = '', last_name = '', email = '', number = '' ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.number = number;
    }
}
