import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../news.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  userForm!: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  userList$: Observable<User[]> = of([]);
  userFound!: User;

  constructor(private authenticationServic: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: this.username,
      password: this.password
    });

    this.userList$ = this.authenticationServic.userList;
  }

  entrance() {
    this.authenticationServic.userSearch(
      this.username.value as string,
      this.password.value as string
    );
    this.userForm.reset();
    this.userForm.markAsUntouched();
  }

  registration() {
    this.router.navigate(['registration']);
  }

}
