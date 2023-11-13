import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { card } from 'src/app/components/components';

@Component({
  templateUrl: './boostrap.component.html',
  styleUrls: ['./boostrap.component.css']
})
export class BoostrapComponent {

  cardGeneratorField = new FormControl(0);
  card: any;
  constructor() { }
  counter: any;
  msg:any;
  ngOnInit() {
    this.card = card
    this.counter = 0
    this.msg = 'Iniciar'
  }

  initTest() {
    if (this.counter == 0) {
      this.counter = 10000
      this.msg = ''
    } else {
      this.counter = 0
    }
  }
}
