import { Review } from './review';

export class Restaurant {
    name: string;
    address: {
        city: string,
        area: string,
        street: string,
        number: number
    };
    type: string;
    rating: {
        voters: number,
        sum: number,
        average: number
    };
    averageBill: number;
    reviews: Review[];
    openingHoursWeekdays: string;
    openingHoursWeekends: string;
    contact: string;
    details: string;
    bookings: any;
    photo: string;
    addedAt: string;
    owner: string;
    voters: string[];
    visible: boolean;

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
        this.addedAt = new Date().toDateString();
        this.owner = owner;
        this.voters = [];
    }
}
