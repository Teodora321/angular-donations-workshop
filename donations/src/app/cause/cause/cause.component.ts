import { Component, OnInit, Input, ViewChild, ElementRef, asNativeElements } from '@angular/core';
import { ICause } from 'src/app/interfaces/cause';
import { CauseService } from 'src/app/services/cause.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  @Input() selectedCause2: ICause;
  isRouteComponent=false //for url, when we have /1000 we prevent please select a cause

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


  constructor(private causeService: CauseService,
    private activatedRoute: ActivatedRoute )
    { this.isRouteComponent = this.activatedRoute.snapshot.params.id}

  ngOnInit() {
    if ((this.isRouteComponent)) {
      this.causeService.getCauses(+this.activatedRoute.snapshot.params.id).subscribe(() => {
        this.causeService.selectCause(this.causeService.causes[0]);
      })
    }

  }

  makeDonationhandler() {
    this.causeService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.causeService.getCauses();
      this.amountInput.nativeElement.value = '';
    });
  }

}