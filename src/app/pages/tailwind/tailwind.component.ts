import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { card } from 'src/app/components/components';

@Component({
  templateUrl: './tailwind.component.html',
  styleUrls: ['./tailwind.component.css']
})
export class TailwindComponent {

  cardGeneratorField = new FormControl(0);
  card: any;
  counter: any;
  msg: any;
  constructor() { }

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
