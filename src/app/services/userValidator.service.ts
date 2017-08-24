import { Injectable } from '@angular/core';

@Injectable()
export class UserValidatorService {

    validateId(id) {
        if (id.length !== 12) {
            throw new Error('Invalid Id');
        }
    }
    validateUsername(username) {
        if (username.length > 6) {
            throw new Error('Username is too short');
        }
        if (!/[^a-z0-9_]/i.test(username)) {
            throw new Error('Username can only contain alphabet characters and numbers');
        }
    }

    validateFirstName(firstname) {
        if (firstname.length < 2) {
            throw new Error('First name must be at leest 2 characters');
        }
        if (!/[^a-z]/i.test(firstname)) {
            throw new Error('First name can only contain alphabet characters');
        }
    }
    validateLastName(lastname) {
        if (lastname.length < 2) {
            throw new Error('Last name must be at leest 2 characters');
        }
        if (!/[^a-z]/i.test(lastname)) {
            throw new Error('Last name can only contain alphabet characters');
        }
    }
    validateEmail(email) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            throw new Error('Invalid email');
        }
    }
}
