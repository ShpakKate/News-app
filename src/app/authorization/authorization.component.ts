import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Observable, of, Subscription} from 'rxjs';
import { User } from '../../shared/model/news.model';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnDestroy {

  userForm!: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  userList$: Observable<User[]> = of([]);
  userFound!: any;
  notFound = false;
  aSub: Subscription | undefined;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.userForm = new FormGroup({
      username: this.username,
      password: this.password
    });

    this.userList$ = this.authenticationService.userList;

    this.route.queryParams.subscribe((params: Params) => {
      if ( params['registred'] ) {
        //можно зайти в систему используя свои данные
      } else if ( params['accessDenied'] ) {
        // для начала авториируйтесь в системе
      }
    })
  }

  ngOnDestroy() {
    if ( this.aSub ) {
      this.aSub.unsubscribe();
    }
  }

  get userValue() {
    return this.userForm.get('username');
  }

  get passwordValue() {
    return this.userForm.get('password');
  }

  login() {
    this.userForm.disabled;

    this.aSub = this.authenticationService.login(this.username.value as string, this.password.value as string).subscribe(
      user => {
        this.userFound = !!user;
        if ( this.userFound ) {
          console.log('Login success')
          this.router.navigate(['news']);
        }
      },
      () => {
      this.notFound = true;
    }
    );
  }

  registration() {
    this.router.navigate(['registration']);
  }

  // login() {
  //   this.userForm.disable();
  //   this.authenticationService.login(this.userForm.value).subscribe(
  //      () => {
  //        console.log('Login success');
  //        this.router.navigate(['news']);
  //      },
  //      // error => {
  //      //   console.warn(error);
  //      //   this.userForm.enabled;
  //      //   this.router.navigate(['registration']);
  //      // }
  //   )
  // }
}
