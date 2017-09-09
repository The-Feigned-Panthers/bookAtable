export class User {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    usertype: string;
    restaurants: string[];
    bookings: string[];

    constructor(username, firstname, lastname, email, usertype) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.usertype = usertype;
    }

}
