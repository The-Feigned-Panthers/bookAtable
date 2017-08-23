export class Review {
    private user: string;
    private message: string;
    private rate: number;
    private date: Date;

    constructor(user: string, rate: number, message: string) {
        this.user = user;
        this.rate = rate;
        this.message = message;
        this.date = new Date();
    }
}
