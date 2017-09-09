export class Booking {
    user: {
        firstName: string,
        lastName: string,
        email: string
    };
    restaurantName: string;
    date: Date;
    time: string;
    numberOfPeople: number;
    dateBooked: string;

    constructor(user, restaurantName, date, time, numberOfPeople) {
        this.user = user;
        this.restaurantName = restaurantName;
        this.date = date;
        this.time = time;
        this.numberOfPeople = numberOfPeople;
        this.dateBooked = new Date().toDateString();
    }
}
