import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {User} from "../../../shared/model/news.model";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  userForm!: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  userFound!: any;
  notFound = false;
  aSub: Subscription | undefined;
  userList?: User[] = [];

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

    this.route.queryParams.subscribe((params: Params) => {
      if ( params['registred'] ) {
        //можно зайти в систему используя свои данные
      } else if ( params['accessDenied'] ) {
        // для начала авториируйтесь в системе
      }
    })
  }

  get userValue() {
    return this.userForm.get('username');
  }

  get passwordValue() {
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
          this.router.navigate(['news'])
        }
      },
      error => this.notFound = true
    )
  }
}



