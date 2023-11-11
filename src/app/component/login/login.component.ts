import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router){

  }
  public userdetails=new UserDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      this.router.navigateByUrl("/movies");
    }
  }

}
