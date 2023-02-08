import { Component } from '@angular/core';
import {User} from "../../../../shared/model/news.model";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../shared/services/authentication.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent {
  userList$: Observable<User[]> = of([]);

  constructor(
    private auth: AuthenticationService
  ) {
    this.userList$ = auth.getList();
  }



}
