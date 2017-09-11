export class Booking {
    user: {
        firstName: string,
        lastName: string,
        email: string
    };
    userId: string;
    restaurantName: string;
    date: Date;
    time: string;
    numberOfPeople: number;
    dateBooked: string;

    constructor(user, userId, restaurantName, date, time, numberOfPeople) {
        this.user = user;
        this.userId = userId;
        this.restaurantName = restaurantName;
        this.date = date;
        this.time = time;
        this.numberOfPeople = numberOfPeople;
        this.dateBooked = new Date().toDateString();
    }
}
