import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, find, Observable, take } from 'rxjs';
import { User } from '../news.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    { id: 1, username: 'Nik', password: '1111' },
    { id: 1, username: 'Alex', password: '2222' },
    { id: 1, username: 'Tom', password: '3333' },
    { id: 1, username: 'Dick', password: '4444' },
  ])

  userList$: Observable<User[]> = this.userList.asObservable();

  userSearch(username: string, password: string) {
    this.userList$.pipe(take(1)).subscribe(user => {
      const userFound = user.find(u => u.username === username && u.password === password);
      console.log(userFound);
      return userFound;
    })
  }

  addNewUser(username: string, password: string, confirmPassword: string) {
    this.userList$.pipe(take(1)).subscribe(users => {
      let uniq = '';
      this.userList$.subscribe(u => {
        uniq = 'id' + Math.random().toString(16).slice(2);
      });

      const newUser = {
        id: uniq,
        username: username,
        password: password,
        confirmPassword: confirmPassword
      }

      console.log(newUser);

      this.userList.next([...users, newUser]);
    })

  }

}
