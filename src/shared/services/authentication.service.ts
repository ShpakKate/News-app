import {Injectable} from '@angular/core';
import {map, Observable, take} from 'rxjs';
import {User} from '../model/news.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private  httpClient: HttpClient, private  router: Router ) {
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
        online: false,
        role: 'user'
      },
    );
  }

  login(user: {username: string, password: string}) {
    return this.getList().pipe(
      take(1),
      map( userList => {
        const foundUser = userList.find(u => u.username === user.username && u.password === user.password);
        if( foundUser ) {
          return foundUser;
        }
        throw new Error('not found')
      })
    )
  }

  logout(id: string) {
  return this.httpClient.delete(`${environment.apiUrl}/authUser/${id}`)
  }

}
