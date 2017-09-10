import { User } from './user';
export class Review {
    user: string;
    message: string;
    date: string;

    constructor(user: string, message: string) {
        this.user = user;
        this.message = message;
        this.date = new Date().toDateString();
    }
}
