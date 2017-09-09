import { User } from './user';
export class Review {
    private user: User;
    private message: string;
    private date: string;

    constructor(user: User, message: string) {
        this.user = user;
        this.message = message;
        this.date = new Date().toDateString();
    }
}
