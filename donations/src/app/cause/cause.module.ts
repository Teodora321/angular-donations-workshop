import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauseListComponent } from './cause-list/cause-list.component';
import { CauseComponent } from './cause/cause.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { CauseRoutingModule } from './cause-routing.module';



@NgModule({
  declarations: [ CauseComponent, CauseListComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    CauseRoutingModule
  ],
  exports:[CauseComponent, CauseListComponent]
})
export class CauseModule { }
