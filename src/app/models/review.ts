import { User } from './user';
export class Review {
    user: User;
    message: string;
    date: string;

    constructor(user: User, message: string) {
        this.user = user;
        this.message = message;
        this.date = new Date().toDateString();
    }
}
