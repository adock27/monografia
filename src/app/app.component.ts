import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { card } from './components/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monografia';

  card: any;
  cardGeneratorField = new FormControl(0);
  lines = new FormControl(0);

  constructor() { }

  ngOnInit() {
    this.card = card
  }




  // ng build --base-href "./" --deploy-url "./"


}
