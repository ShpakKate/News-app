import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MyValidators } from 'src/shared/valiadators';
import { News } from '../model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent implements OnInit {

  title: string = 'new title:';
  news: string = ' new news:';
  form!: FormGroup;
  newsList$: Observable<News[]> = of([]);

  loginForm: any = {
    titleText: '',
    text: ''
  }

  constructor(private dataService: DataService) {
  }

  addNews(title: string, full: string) {
    this.dataService.addNews(title, full);
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, MyValidators.spacesVal]),
      news: new FormControl('', [Validators.required, Validators.minLength(10), MyValidators.spacesVal])
    });

    this.newsList$ = this.dataService.newsList;

  }

  get titleFn() {
    return this.form.get('title')
  }

  get newsFn() {
    return this.form.get('news')
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form);
      const formData: any = { ...this.form.value }
      this.form.reset();
      console.log(this.loginForm.text, this.loginForm.titleText)
    }
  }

  clear() {
    this.form.reset();
  }
}
