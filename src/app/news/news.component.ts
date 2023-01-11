import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList$: Observable<News[]>;
  activeNews: any;

  constructor(private dataService: DataService) {
    this.newsList$ = dataService.newsList;
  }

  ngOnInit(): void {

  }

  deleteNews(item: any) {
    this.dataService.deleteNews(item);
  }

  deleteNewses() {
    this.dataService.deleteNewses();
  }

  onClick(item: any) {
    this.activeNews = item;
  }

  onModalClose() {
    this.activeNews = null;
  }
}
