import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-regisrtation',
  templateUrl: './regisrtation.component.html',
  styleUrls: ['./regisrtation.component.scss']
})
export class RegisrtationComponent implements OnInit {

  userForm!: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(10)]);
  confirmPassword = new FormControl('', [Validators.required]);
  compareValidator = false;

  constructor(private authenticationServic: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    })

    this.confirmPassword.valueChanges.subscribe( () => {

      if ( this.password.value !== this.confirmPassword.value) {
        this.confirmPassword.setErrors({PasswordNotMatch: true});
        this.compareValidator = true;
      }
    })
  }

  get userValue(): AbstractControl | null  {
    return this.userForm.get('username');
  }

  get passwordValue(): AbstractControl | null  {
    return this.userForm.get('password');
  }

  get confirmPasswordValue(): AbstractControl | null  {
    return this.userForm.get('confirmPasswordValue');
  }

  createUser() {
    this.authenticationServic.createUser( {
        username: this.username.value as string,
        password: this.password.value as string,
    }).subscribe(
    )

    this.userForm.reset();
    this.userForm.markAsUntouched();
    this.router.navigate(['authorization'], {
      queryParams: {
        registred: true
      }
    });
  }

  close() {
    this.router.navigate(['authorization']);
  }
}

