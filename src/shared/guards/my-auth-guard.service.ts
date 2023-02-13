import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService,
              private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): boolean | Observable<boolean> {
      const logged = this.auth.isLogged;
      if ( !logged ) {
        this.router.navigate(['authorization']);
        return false;
      } return true;
  }
}
