import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoginComponent, RegisterComponent, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent, HeaderComponent, LoginComponent, RegisterComponent]
})
export class CoreModule { }
