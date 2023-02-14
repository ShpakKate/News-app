import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyValidators {
  static spacesVal(control: FormControl): { [key: string]: boolean } | null {
    if (control.value?.trim() === '') {
      return { spacesOnly: true };
    }
    return null;
  }

  static createCompareValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password !== confirmPassword ? { compareValidator: true } : null;
  };
}
