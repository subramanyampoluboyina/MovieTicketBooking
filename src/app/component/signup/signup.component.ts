import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private router:Router){

  }
  public userdetails=new UserDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.userdetails.password == this.userdetails.cpassword){
        alert("Registered successfully")
      }
    }
    else{
      alert("Invalid details!!!")
    }
  }

}
