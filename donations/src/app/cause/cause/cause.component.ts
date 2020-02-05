import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ICause } from 'src/app/interfaces/cause';
import { CauseService } from 'src/app/services/cause.service';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent{
  
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;
  
  @Input() selectedCause2: ICause;
  
  get selectedCause() { return this.causeService.selectedCause; }

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow';
    }
    return 'red';
  }


  constructor(private causeService: CauseService) { }

  makeDonationhandler() {
    this.causeService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.causeService.getCauses();
      this.amountInput.nativeElement.value = '';
    });
  }

}