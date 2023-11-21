import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MoviesComponent } from './component/movies/movies.component';
import { Seating1Component } from './component/seating1/seating1.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './component/signup/signup.component';
import { ForgetPwdComponent } from './component/forget-pwd/forget-pwd.component';
import { Ticket1Component } from './component/ticket1/ticket1.component';
import { Seating2Component } from './component/seating2/seating2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MoviesComponent,
    Seating1Component,
    SignupComponent,
    ForgetPwdComponent,
    Ticket1Component,
    Seating2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
