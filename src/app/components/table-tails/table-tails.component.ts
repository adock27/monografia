import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-tails',
  templateUrl: './table-tails.component.html',
  styleUrls: ['./table-tails.component.css']
})
export class TableTailsComponent {


  lines = new FormControl(12);


}
