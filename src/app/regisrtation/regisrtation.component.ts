import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../news.model';
import { AuthenticationService } from '../../shared/services/authentication.service';

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
  userList$: Observable<User[]> = of([]);
  compareValidator = false;

  constructor(private authenticationServic: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    })

    this.confirmPassword.valueChanges.subscribe( () => {

      if ( this.password.value !== this.confirmPassword.value) {
        this.confirmPassword.setErrors({PasswordNotMatch: true});
        this.confirmPassword.setErrors({PasswordNotMatch: true});
        this.compareValidator = true;
      }
    })

    this.userList$ = this.authenticationServic.userList;
  }

  get userValue() {
    return this.userForm.get('username');
  }

  get passwordValue() {
    return this.userForm.get('password');
  }

  get confirmPasswordValue() {
    return this.userForm.get('confirmPasswordValue');
  }

  createUser() {
    // this.authenticationServic.addNewUser(
    //   this.username.value as string,
    //   this.password.value as string,
    //   this.confirmPassword.value as string
    // );

    this.authenticationServic.createUser( {
        username: this.username.value as string,
        password: this.password.value as string,
    })

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

