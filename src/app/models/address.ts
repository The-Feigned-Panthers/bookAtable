export class Address {
    public area: string;
    public city: string;
    public street: string;
    public number: number;

    constructor(city: string, area: string, street: string, number: number) {
        this.city = city;
        this.area = area;
        this.street = street;
        this.number = number;
    }
}
