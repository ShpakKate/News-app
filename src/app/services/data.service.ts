import { Injectable } from '@angular/core';
import { News } from '../news.model';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newsList: BehaviorSubject<News[]> = new BehaviorSubject<News[]>([
    { id: 1, title: 'lorem 1', short: 'lorem ipsum...', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 2, title: 'lorem 2', short: 'lorem ipsum...', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 3, title: 'lorem 3', short: 'lorem ipsum...', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 4, title: 'lorem 4', short: 'lorem ipsum...', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 5, title: 'lorem 5', short: 'lorem ipsum...', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 6, title: 'lorem 6', short: 'lorem ipsum...', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' }
  ]);

  newsList$: Observable<News[]> = this.newsList.asObservable();

  addNews(title: string, full: string) {
    this.newsList$.pipe(take(1)).subscribe(val => {
      let uniq = '';
      this.newsList$.subscribe(newsList => {
        uniq = 'id' + Math.random().toString(16).slice(2);
        console.log(uniq);
      })
      const short = full.slice(0, 15);
      const newNews = {
        id: uniq,
        title: title,
        short: short,
        full: full
      };

      const newNewsArray = [newNews, ...val];
      this.newsList.next(newNewsArray);
    })
  }

  deleteNews(item: any) {
    this.newsList$.pipe(take(1)).subscribe(val => {
      const newNewsArray = val.filter(n => n.id !== item.id);
      this.newsList.next(newNewsArray);
    })
  }

  deleteNewses() {
    this.newsList.next([]);
  }

}

