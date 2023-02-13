import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Observable, of, switchMap, tap} from 'rxjs';
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
  a!: string | undefined;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.loadData().subscribe();
    this.a = this.item?.full?.slice(0, 40);
  }

  loadData() {
    return this.dataService.getNewsList().pipe(
      tap(data => {
        this.newsList$ = of(data);
      })
    )
  }

  get news() {
    return this.shortNews ? `${this.a}...` : this.item.full;
  }

  toggleFull() {
    this.shortNews = !this.shortNews;
    this.btnName = this.shortNews ? 'Show full news' : 'Show short news';
  }

  hidingBtn() {
    return (this.a !== this.item.full);
  }

  deleteNews(item: News) {
    this.newsList$.pipe(
      switchMap(users => this.dataService.deleteNews(item)),
      switchMap(() => this.loadData())
    ).subscribe()
  }

  onEditNews(item: News) {
    this.editClick.emit();
  }
}
