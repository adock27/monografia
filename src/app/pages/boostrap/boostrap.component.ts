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

  ngOnInit() {
    this.card = card
  }
}
