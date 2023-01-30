import { Injectable } from '@angular/core';
import { News } from '../news.model';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newsList: BehaviorSubject<News[]> = new BehaviorSubject<News[]>([
    { id: 1, title: 'lorem 1', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', imgUrl: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg' },
    { id: 2, title: 'lorem 2', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 3, title: 'lorem 3', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 4, title: 'lorem 4', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 5, title: 'lorem 5', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
    { id: 6, title: 'lorem 6', full: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' }
  ]);

  newsList$: Observable<News[]> = this.newsList.asObservable();

  updateNews(item: News) {
    this.newsList$.pipe(
      map(news => news.filter(i => i.id !== item.id))
    ).subscribe(newsItems => {
      this.newsList.next([item, ...newsItems]);
    })
  }

  addNews(title: string, full: string, img: string) {
    this.newsList$.pipe(take(1)).subscribe(val => {
      let uniq = '';
      this.newsList$.subscribe(newsList => {
        uniq = 'id' + Math.random().toString(16).slice(2);
      });

      const newNews = {
        id: uniq,
        title: title,
        full: full,
        imgUrl: img,
      };

      this.newsList.next([newNews, ...val]);
    })
  }

  deleteNews(item: News) {
    this.newsList$.pipe(take(1)).subscribe(val => {
      const newNewsArray = val.filter(n => n.id !== item.id);
      this.newsList.next(newNewsArray);
    })
  }

  deleteNewses() {
    this.newsList.next([]);
  }
}