import { User } from './user';
import { Review } from './review';

export class Restaurant {
    public name: string;
    public address: {
        city: string,
        area: string,
        street: string,
        number: number
    };
    public type: string;
    public rating: {
        voters: number,
        sum: number,
        average: number
    };
    public averageBill: number;
    public reviews: Review[];
    public openingHoursWeekdays: string;
    public openingHoursWeekends: string;
    public contact: string;
    public details: string;
    public bookings: any;
    public photo: string;
    public addedAt: string;
    public owner: User;
    // to take only the user id?

    constructor(name, address, type, averageBill,
        openingHoursWeekdays, openingHoursWeekends, contact, details, owner) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.rating = {
            voters: 0,
            sum: 0,
            average: 0
        };
        this.averageBill = averageBill;
        this.reviews = [];
        this.openingHoursWeekdays = openingHoursWeekdays;
        this.openingHoursWeekends = openingHoursWeekends;
        this.contact = contact;
        this.details = details;
        this.bookings = [];
        this.photo = 'http://spizzico.org/wp-content/uploads/2015/03/spizzico1.jpg';
        this.addedAt = new Date().toString();
        this.owner = owner;
    }
}
