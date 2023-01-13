import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { News } from '../news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  newsList$: Observable<News[]> = of([]);
  hidden = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.newsList$ = this.dataService.newsList;
  }

  deleteNewses() {
    this.dataService.deleteNewses();
  }
}
