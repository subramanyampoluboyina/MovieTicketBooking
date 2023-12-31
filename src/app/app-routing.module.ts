import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { Seating1Component } from './component/seating1/seating1.component';
import { ForgetPwdComponent } from './component/forget-pwd/forget-pwd.component';
import { Ticket1Component } from './component/ticket1/ticket1.component';
import { Seating2Component } from './component/seating2/seating2.component';
import { Payment1Component } from './component/payment1/payment1.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'seating1',component:Seating1Component},
  {path:'seating2',component:Seating2Component},
  {path:'forgetPwd',component:ForgetPwdComponent},
  {path:'ticket1',component:Ticket1Component},
  {path:'payment1',component:Payment1Component},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
