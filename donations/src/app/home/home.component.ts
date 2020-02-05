import { Component } from '@angular/core';
import { ICause } from '../interfaces/cause';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedCause: ICause;

  selectCauseHandler(cause: ICause) {
    this.selectedCause = cause;
  }

} 
