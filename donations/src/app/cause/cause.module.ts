import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauseListComponent } from './cause-list/cause-list.component';
import { CauseComponent } from './cause/cause.component';



@NgModule({
  declarations: [ CauseComponent, CauseListComponent],
  imports: [
    CommonModule
  ],
  exports:[CauseComponent, CauseListComponent]
})
export class CauseModule { }
