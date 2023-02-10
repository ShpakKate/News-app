import {Component, OnInit} from '@angular/core';
import {User} from "../../../../shared/model/news.model";
import {Observable, of, switchMap, tap} from "rxjs";
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {DeletingUserComponent} from "../deleting-user/deleting-user.component";
import {MatDialog} from "@angular/material/dialog";
import {EditingUserDataComponent} from "../editing-user-data/editing-user-data.component";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  userList$: Observable<User[]> = of([]);
  notAdmin = false;


  constructor(
    private auth: AuthenticationService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadData().subscribe();
  }

  loadData() {
    return this.auth.getList().pipe(
      tap(data => {
        this.userList$ = of(data);
        this.notAdmin = false;
      })
    )
  }

  onDeleteUser(user: User) {
    if (user.username !== 'Admin') {
      const dialogRef = this.dialog.open(DeletingUserComponent, {data: {}});

      dialogRef.afterClosed().pipe(
        switchMap(confirmed => confirmed ? this.auth.deleteUser(user) : of(false)),
        switchMap(() => this.loadData())
      ).subscribe()
    } else this.notAdmin = true;
  }

  onEditUser( user: User) {
    if (user.username !== 'Admin') {
      const  dialogRef = this.dialog.open(EditingUserDataComponent, {data: user});

      dialogRef.afterClosed().pipe(
        switchMap(data => {
          return this.auth.updateUser({
            ...user,
            username: data.username,
            password: data.password,
            role: data.role,
          })
        }),
        switchMap(() => this.loadData())
      ).subscribe()
    } else this.notAdmin = true;
  }
}
