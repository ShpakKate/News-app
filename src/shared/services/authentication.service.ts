import {Injectable} from '@angular/core';
import {map, Observable, of, take} from 'rxjs';
import {User} from '../model/news.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userTitle?: string;
  isLogged = false;

  constructor( private  httpClient: HttpClient ) {
  }

  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/user`);
  }

  createUser(user: { username: string, password: string }): Observable<User> {
    const { username, password } = user;
    console.log(user);
    return this.httpClient.post<User>(
      `${environment.apiUrl}/user`,
      {
        username,
        password,
        role: 'user'
      },
    );
  }

  login(user: {username: string, password: string}) {
    return this.getList().pipe(
      take(1),
      map( userList => {
        const foundUser = userList.find(u => u.username === user.username && u.password === user.password);
        this.userTitle = foundUser?.username;
        if( foundUser ) {
          this.isAuthenticated();
          return foundUser;
        }
        throw new Error('not found')
      })
    )
  }

  logout() {
    return this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged = true;
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.patch<User>(`${environment.apiUrl}/user/${user.id}`,
      {
        username: user.username,
        password: user.password,
        role: user.role,
        id: user.id
      });
  }

  deleteUser(user: User): Observable<void>{
    return this.httpClient.delete<void>(`${environment.apiUrl}/user/${user.id}`);
  }



}
