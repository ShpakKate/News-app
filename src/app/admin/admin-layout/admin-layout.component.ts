import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
 title = 'Admin page';

 constructor( private router: Router, private auth: AuthenticationService) {
 }
  logout($event: MouseEvent) {
    $event.preventDefault()
    this.router.navigate(['/'])
  }

  add() {
    // this.auth.getList().subscribe((value) =>  console.log(value))
    this.auth.getList().pipe(
      tap(a => console.log(a))
    ).subscribe()


  }
}
