import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { articles } from './json/articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monografia';

  articles: any;



  size = new FormControl(8);

  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.articles = articles
  }


  state: any;


  validateField(number: any) {

    if (isNaN(number)) { this.state = 'No es un numero'; return false };
    if (number > this.articles.length) { this.state = 'No puede ser mayor'; return false };
    if (number == null) { this.state = 'No puede estar vacio'; return false };
    if (number < 1) { this.state = 'No puede ser 0'; return false };
    if (number > 1000) { this.state = 'Rendimiento lento'; return true };
    this.state = ''
    return true;
  }

}
