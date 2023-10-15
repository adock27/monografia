import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { card } from '../components';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  cardGeneratorField = new FormControl(0);
  card: any;


  constructor() { }

  ngOnInit() {
    this.card = card
  }
}
