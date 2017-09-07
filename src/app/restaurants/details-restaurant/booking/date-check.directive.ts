import { Validator, AbstractControl, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Input, Directive, forwardRef, Attribute } from '@angular/core';

@Directive({
    selector: '[appDateCheck][formControlName],[appDateCheck][formControl],[appDateCheck][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => DateCheckDirective), multi: true }]
})

export class DateCheckDirective implements Validator {

    // constructor() { }
    constructor(@Attribute('appDateCheck') public dateCheck: string) { }
    validate(control: FormControl): {[key: string]: any} {

        const dateBooking = Date.parse(control.value.toString());
        const dateNow = Date.now();

        if (dateNow > dateBooking) {
            return {
            dateCheck: {
                valid: false
                }
            };
        }
        return null;
    }
}
