import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import {MyValidators} from 'src/shared/valiadators';
import {DataService} from '../../../shared/services/data.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss'],
})
export class NewNewsComponent implements OnInit {
  changeNews!: any;
  btnName = 'Add news';
  form!: FormGroup;
  title = new FormControl('', [Validators.required, MyValidators.spacesVal]);
  news = new FormControl('', [Validators.required, Validators.minLength(10), MyValidators.spacesVal]);
  imgUrl = new FormControl('', Validators.required);
  imgPreview?: string | null = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.changeNews = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: this.title,
      news: this.news,
      imgUrl: this.imgUrl,
    });

    if(this.changeNews) {
      this.btnName = 'Edit News';
      this.imgPreview = this.changeNews.imgUrl
      this.form.setValue({
        title: this.changeNews.title,
        news: this.changeNews.full,
        imgUrl: this.changeNews.imgUrl || '',
      });
    }

    this.imgUrl.valueChanges.subscribe(selectedValue => {
      if(this.form) {
        console.log(selectedValue)
        this.imgPreview = selectedValue;
      }
    });
  }

  get titleValue(): AbstractControl| null {
    return this.form.get('title');
  }

  get newsValue(): AbstractControl| null {
    return this.form.get('news');
  }

  get imgUrlValue(): AbstractControl| null {
    return this.form.get('imgUrl');
  }

  addNews() {
    if (this.changeNews?.id) {
      this.dataService.updateNews({
        id: this.changeNews.id,
        title: this.title.value as string,
        full: this.news.value as string,
        imgUrl: this.imgUrl.value as string
      }).subscribe();
    }
    else this.dataService.createNews( {
        title: this.title.value as string,
        full: this.news.value as string,
        imgUrl: this.imgUrl.value as string
    }).subscribe();
    this.form.reset();
    this.form.markAsUntouched();
  }

  goToNews() {
    this.router.navigate(['news']);
  }
}
