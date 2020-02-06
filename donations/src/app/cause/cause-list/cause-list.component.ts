import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ICause } from 'src/app/interfaces/cause';
import { CauseService } from 'src/app/services/cause.service';

@Component({
  selector: 'app-cause-list',
  templateUrl: './cause-list.component.html',
  styleUrls: ['./cause-list.component.css']
})
export class CauseListComponent implements OnInit {
    get causes() { return this.causeService.causes; }
  
    @Output() selectCause: EventEmitter<ICause> = new EventEmitter();
  
    constructor(private causeService: CauseService) { }
  
    ngOnInit() {
      this.causeService.getCauses().subscribe();
    }
  
    selectCauseHandler(cause: ICause) {
      //this.selectCause.emit(cause);
      this.causeService.selectCause(cause)
    }
  
  }