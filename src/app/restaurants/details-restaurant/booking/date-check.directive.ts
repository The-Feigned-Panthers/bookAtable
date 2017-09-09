import { Validator, AbstractControl, NG_VALIDATORS, FormControl, ValidatorFn } from '@angular/forms';
import { Directive, forwardRef } from '@angular/core';

function validateDate(): ValidatorFn  {
            return (control: AbstractControl) => {
                const dateBooking = Date.parse(control.value.toString());
                const dateNow = Date.now();
                console.log('checking date');
                if (dateNow > dateBooking) {
                    return {
                    dateCheck: {
                        valid: false
                        }
                    };
                }
                return null;
            };
        }

@Directive({
    selector: '[appDateCheck][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DateCheckDirective, multi: true }]
})

export class DateCheckDirective implements Validator {
    validator: ValidatorFn;

    constructor() {
        console.log('constructing date');
        this.validator = validateDate();
     }

     validate (control: FormControl) {
         return this.validator;
     }
}
