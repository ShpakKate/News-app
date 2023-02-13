import {Component} from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  new = new Date();
  userTitle?: string;

  constructor(private authenticationService: AuthenticationService) {
    this.userTitle = this.authenticationService.userTitle;
  }
}
