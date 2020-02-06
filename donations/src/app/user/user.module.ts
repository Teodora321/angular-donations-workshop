import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProfileComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
    
  ],
  exports:[ProfileComponent, UserComponent]
})
export class UserModule { }
