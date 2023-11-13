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
  constructor() { }

  ngOnInit() {
    this.card = card
  }
}
