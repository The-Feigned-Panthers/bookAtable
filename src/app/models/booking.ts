export class Booking {
    userId: string;
    restaurantName: string;
    date: Date;
    time: string;
    numberOfPeople: number;
    dateBooked: string;

    constructor(userId, restaurantName, date, time, numberOfPeople) {
        this.dateBooked = new Date().toDateString();
    }
}
