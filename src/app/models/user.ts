import { UserValidatorService } from '../services/userValidator.service';
export class User {
    private _id: string;
    private _username: string;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private _owner: boolean;


    constructor(private validator: UserValidatorService, id, username, firstname, lastname, email, owner) {
        this.validator = validator;
   }

    set id(id) {
        this.validator.validateId(id);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set username(username) {
        this.validator.validateUsername(username);
        this._username = username;
    }
    set firstname(firstname) {
        this.validator.validateFirstName(firstname);
        this._firstname = firstname;
    }
    get firstname() {
        return this._firstname;
    }
    set lastname(lastname) {
        this.validator.validateLastName(lastname);
        this._firstname = lastname;
    }
    get lastname() {
        return this._lastname;
    }
    set email(email) {
        this.validator.validateEmail(email);
        this._email = email;
    }
}
