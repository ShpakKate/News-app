import {Component} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Observable, of} from 'rxjs';
import {News} from '../../../shared/model/news.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  newsList$: Observable<News[]> = of([]);
  hidden = true;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.newsList$ = this.dataService.newsList;
  }

  goToAddNews() {
    this.router.navigate(['new-news']);
  }

  onEditNews(item: News) {
    this.router.navigate(['new-news'], {
      state: { news: item }
    });
  }

  deleteNewses() {
    this.dataService.deleteNewses();
  }
}
