import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { UserdetailsService } from 'src/app/service/userdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,private service:UserdetailsService){

  }
  public userdetails=new UserDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      this.service.verifyuser(this.userdetails).subscribe((res:any)=>{
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/movies');
      },
      (error)=>{
        alert("Invalid Credentials!!!");
      })
    }
    else{
      alert("Invalid Credentials!!!")
    }
  }

}
