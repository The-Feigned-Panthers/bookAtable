import { User } from './user';
export class Review {
    private user: User;
    // to use user.id only instead of the whole user ?
    private message: string;
    private date: string;

    constructor(user: User, message: string) {
        this.user = user;
        // this.rating = rating ?
        this.message = message;
        this.date = new Date().toDateString();
    }
}
