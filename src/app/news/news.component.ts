import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  activeNews: any;

  onClick(item: any) {
    this.activeNews = item;
  }

  onModalClose() {
    this.activeNews = null;
  }
}
