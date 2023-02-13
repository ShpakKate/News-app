import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  title = 'Admin page';

  constructor(private router: Router, private auth: AuthenticationService) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
