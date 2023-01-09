import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent implements OnInit {

  title: string = 'new title:';
  news: string = ' new news:';

  loginForm: any = {
    titleText: '',
    text: ''
  }

  form!: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      news: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
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
    }

    console.log(this.loginForm.text, this.loginForm.titleText)
  }

  empty() {
    this.loginForm.titleText
  }

  clear() {
    this.form.reset();
  }
}
