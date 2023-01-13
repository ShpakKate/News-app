import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { News } from '../news.model';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit {

  activeNews!: News | null;
  newsList$: Observable<News[]> = of([]);
  showNews = false;
  @Input() item!: News;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.newsList$ = this.dataService.newsList;
  }

  showNewsItem() {
    this.showNews = !this.showNews;
  }

  deleteNews(item: any) {
    this.dataService.deleteNews(item);
  }

}
