import { Injectable } from '@angular/core';
import { News } from '../model/news.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getNewsList(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.apiUrl}/news`);
  }

  updateNews(news: News): Observable<News> {
    return this.http.patch<News>(`${environment.apiUrl}/news/${news.id}`, {
      title: news.title,
      full: news.full,
      imgUrl: news.imgUrl,
    });
  }

  createNews(news: { title: string; full: string; imgUrl: string }): Observable<News> {
    return this.http.post<News>(`${environment.apiUrl}/news`, {
      title: news.title,
      full: news.full,
      imgUrl: news.imgUrl,
    });
  }

  deleteNews(news: News): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/news/${news.id}`);
  }

  deleteNewses(): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/news`);
  }
}
