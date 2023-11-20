import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { UserdetailsService } from 'src/app/service/userdetails.service';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit{
  public userdetails=new UserDetails;
  public user:any;
  constructor(private router:Router,private service:UserdetailsService){

  }
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.userdetails.password==this.userdetails.cpassword){
        this.service.verifyforgetuser(this.userdetails).subscribe((res:any)=>{
          localStorage.setItem('token',res.token);
          alert("Password changed successfully");
          this.router.navigateByUrl('/login');
        },
        (error)=>{
          alert("Email is not registered!!!");
        })
      }
      else{
        alert("Password not matched");
      }
    }
    else{
      alert("Invalid details!!!");
    }
  }
  reset(email: any){
    this.service.getUpdatedUser(email).subscribe(data=>{
      this.user=data;
      this.user.password=this.userdetails.password;
      this.service.updateUser(email, this.user).subscribe({})
    })
  }
}
