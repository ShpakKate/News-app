import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MyValidators } from 'src/shared/valiadators';
import { News } from '../../news.model';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent implements OnInit {

  changeNews!: News;
  btnName: string = 'Add news';
  form!: FormGroup;
  title = new FormControl('', [Validators.required, MyValidators.spacesVal]);
  news = new FormControl('', [Validators.required, Validators.minLength(10), MyValidators.spacesVal]);
  imgUrl = new FormControl('', Validators.required);
  newsList$: Observable<News[]> = of([]);
  imgPreviw?: string | null = '';
  preview: any;


  constructor(private dataService: DataService, private router: Router) {
    this.changeNews = this.router.getCurrentNavigation()?.extras.state?.['../news'];
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: this.title,
      news: this.news,
      imgUrl: this.imgUrl
    });

    if (this.changeNews) {
      this.btnName = 'Edit News';
      this.form.setValue({
        title: this.changeNews.title,
        news: this.changeNews.full,
        imgUrl: this.changeNews.imgUrl || ''
      })
    }

    this.imgUrl.valueChanges.subscribe(selectedValue => {
      if (this.form) {
        this.imgPreviw = selectedValue;
        console.log(this.imgPreviw);
      }
    })
  }

  get titleValue() {
    return this.form.get('title');
  }

  get newsValue() {
    return this.form.get('news');
  }

  get imgUrlValue() {
    return this.form.get('imgUrl');
  }

  addNews() {
    if (this.changeNews?.id) {
      this.dataService.updateNews({
        id: this.changeNews.id,
        title: this.title.value as string,
        full: this.news.value as string,
        imgUrl: this.imgUrl.value as string
      })
    } else this.dataService.addNews(
      this.title.value as string,
      this.news.value as string,
      this.imgUrl.value as string
    );
    this.form.reset();
    this.form.markAsUntouched();
  }

  clear() {
    this.form.reset();
  }
}
