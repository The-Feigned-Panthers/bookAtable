export class Restaurant {
    private name: string;
    private place: string;
    private type: string;
    private rating: number;
    private averageBill: number;
    private reviews: string[];
    private openingHours: string;
    private contact: string;
    private details: string;
    private reservations: Date[];
    private photos: string[];

    constructor(name: string, place: string, type: string,
        rating: number, averageBill: number,
        openingHours: string, contact: string, details: string) {
        this.name = name;
        this.place = place;
        this.type = type;
        this.rating = rating;
        this.averageBill = averageBill;
        this.reviews = [];
        this.openingHours = openingHours;
        this.contact = contact;
        this.details = details;
        this.reservations = [];
        this.photos = [];
    }
}
