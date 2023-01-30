import { FormControl } from "@angular/forms";

export class MyValidators {
    static spacesVal(control: FormControl): { [key: string]: boolean } | null {

        if (control.value?.trim() === '') {
            return { spacesOnly: true }
        }
        return null
    }

    static createCompareValidator(controlOne: FormControl, controlTwo: FormControl) {
        return () => {
            if (controlOne.value !== controlTwo.value)
                return { match_error: 'Value does not match' };
            return null;
        };

    }
}