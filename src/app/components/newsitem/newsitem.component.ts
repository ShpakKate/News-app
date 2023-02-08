import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Observable, of} from 'rxjs';
import {News} from '../../../shared/model/news.model';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit {

  @Input() item!: News;
  @Output() editClick = new EventEmitter;
  newsList$: Observable<News[]> = of([]);
  shortNews = true;
  btnName = 'Show full news';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.newsList$ = this.dataService.newsList;
  }

  get news() {
    return this.shortNews ? this.item?.full?.slice(0, 40) + '...' : this.item.full;
  }

  toggleFull() {
    this.shortNews = !this.shortNews;
    this.btnName = this.shortNews ? 'Show full news' : 'Show short news';
  }

  unnecessaryBtn() {
    return (this.item?.full?.slice(0, 40) !== this.item.full);
  }

  deleteNews(item: News) {
    this.dataService.deleteNews(item);
  }

  onEditNews(item: News) {
    this.editClick.emit();
  }
}
