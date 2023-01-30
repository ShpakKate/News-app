import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../news.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-regisrtation',
  templateUrl: './regisrtation.component.html',
  styleUrls: ['./regisrtation.component.scss']
})
export class RegisrtationComponent implements OnInit {

  userForm!: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(10)]);
  confirmPassword = new FormControl('', [Validators.required]);
  userList$: Observable<User[]> = of([]);

  constructor(private authenticationServic: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    })

    this.userForm.addValidators(
      createCompareValidator(
        this.userForm.get('password'),
        this.userForm.get('confirmPassword')
      )
    );

    this.userList$ = this.authenticationServic.userList;
  }

  newUser() {
    this.authenticationServic.addNewUser(
      this.username.value as string,
      this.password.value as string,
      this.confirmPassword.value as string
    );
    this.userForm.reset();
    this.userForm.markAsUntouched();
  }

  close() {
    this.router.navigate(['authorization']);
  }
}
function createCompareValidator(arg0: import("@angular/forms").AbstractControl<any, any> | null, arg1: import("@angular/forms").AbstractControl<any, any> | null): any {
  throw new Error('Function not implemented.');
}

