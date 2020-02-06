import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CauseModule } from './cause/cause.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './services/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CauseModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
