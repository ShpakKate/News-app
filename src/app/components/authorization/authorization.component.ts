import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {User} from "../../../shared/model/user.model";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  userForm!: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  notFound = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.userForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  get userValue(): AbstractControl | null {
    return this.userForm.get('username');
  }

  get passwordValue(): AbstractControl | null  {
    return this.userForm.get('password');
  }

  registration() {
    this.router.navigate(['registration']);
  }

  login() {
    this.authenticationService.login({
      username: this.username.value as string,
      password: this.password.value as string,
    }).subscribe(
      (user: User | undefined) => {
        if ( user?.role === 'admin' ) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['user']);
        }
      },
      error => this.notFound = true
    )
  }
}



