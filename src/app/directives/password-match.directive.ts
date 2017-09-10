import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Input, Directive, forwardRef, Attribute } from '@angular/core';

@Directive({
    selector: '[appPasswordMatch][formControlName],[appPasswordMatch][formControl],[appPasswordMatch][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordMatchDirective), multi: true }]
})

export class PasswordMatchDirective implements Validator {
    constructor(@Attribute('appPasswordMatch') public passwordMatch: string) {}
    validate(control: AbstractControl): {[key: string]: any} {
        const compare = control.value;
        const pass = control.root.get(this.passwordMatch);
        if (pass && compare !== pass.value) {
            return {
            passwordMatch: {
                valid: false
                }
            };
        }
        return null;
    }
}
