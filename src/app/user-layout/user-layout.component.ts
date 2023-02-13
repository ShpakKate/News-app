import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent {
  constructor(private auth: AuthenticationService, private router: Router) {}

  title!: 'first-app';

  logout(event: any) {
    this.auth.logout();
    this.router.navigate(['/']);
    console.log(this.auth.isLogged, event);
  }
}
