import { FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static mustMatch(control: FormGroup | null): ValidationErrors | null {
        if (control?.get("password")?.value == control?.get("cpassword")?.value) {
            return null;
        } else {
            return {
                PasswordsDontMatch: true
            };
        }

    }
}