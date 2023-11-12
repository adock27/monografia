import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { card } from '../components';
@Component({
  selector: 'app-card-tails',
  templateUrl: './card-tails.component.html',
  styleUrls: ['./card-tails.component.css']
})
export class CardTailsComponent {
  cardGeneratorField = new FormControl(0);
  card: any;


  constructor() { }

  ngOnInit() {
    this.card = card
  }
}
