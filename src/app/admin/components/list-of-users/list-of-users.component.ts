import {Component, OnInit} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {User} from "../../../../shared/model/news.model";
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'role', 'password'];
  dataSource = new MatTableDataSource();
  userList$: Observable<User[]> = of([]);
  notAdmin = false;

  constructor( private auth: AuthenticationService, ) {
  }

  ngOnInit() {
    this.loadData().subscribe();
    this.getElementData();
  }

  loadData() {
    return this.auth.getList().pipe(
      tap(data => {
        this.userList$ = of(data);
        this.notAdmin = false;
      })
    )
  }

  getElementData(): void {
    this.auth.getList().subscribe(res => {
      this.dataSource.data = res;
    })
  }
}
