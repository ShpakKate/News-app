import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, take, tap } from 'rxjs';
import { User } from '../model/news.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    { id: 1, username: 'Nik', password: '1111' },
    { id: 2, username: 'Alex', password: '2222' },
    { id: 3, username: 'Tom', password: '3333' },
    { id: 4, username: 'Dick', password: '4444' },
    { id: 5, username: 'Admin', password: '0000'},
  ]);

  userList$: Observable<User[]> = this.userList.asObservable();

  constructor( private  httpClient: HttpClient) {
  }

  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/user`);
  }

  login(username: string, password: string) {
    return this.userList$.pipe(
      take(1),
      switchMap((userList) => {
        const userFound = userList.find (u => u.username === username && u.password === password && u.username !== 'Admin');

        return of(userFound).pipe(
          tap(
            (user) => {
              if ( user ) {
                this.addAuthUser(user);
              }
            }
          )
        )
      })
    );
  }

  logout(id: string) {
  return this.httpClient.delete(`${environment.apiUrl}/authUser/${id}`)
  }


  addAuthUser(user: User): Observable<User> {
    console.log(user);
    return  this.httpClient.post<User>(`${environment.apiUrl}/authUser`, user);
  }

  // isAuthenticated(user: User): any {
  //   this.httpClient.get<User[]>(`${environment.apiUrl}/authUser`).pipe(
  //     take(1),
  //     switchMap(users => {
  //
  //     })
  //   )
  // }

  addNewUser(username: string, password: string, confirmPassword: string) {
    this.userList$.pipe(take(1)).subscribe(users => {
      let uniq = '';
      this.userList$.subscribe(value => {
        uniq = 'id' + Math.random().toString(16).slice(2);
      });

      const newUser = {
        id: uniq,
        username: username,
        password: password,
        confirmPassword: confirmPassword
      }
      this.userList.next([...users, newUser]);
    })
  }

  createUser(user: { username: string, password: string }): Observable<User> {
    const { username, password } = user;
    console.log(user);
    return this.httpClient.post<User>(
      `${environment.apiUrl}/user`,
      {
        username,
        password
      },
      );
  }
}
