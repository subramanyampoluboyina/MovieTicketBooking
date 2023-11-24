import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { UserdetailsService } from 'src/app/service/userdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private router:Router,private service:UserdetailsService){

  }
  public userdetails=new UserDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.userdetails.password == this.userdetails.cpassword){
        this.service.addUserDetails(this.userdetails).subscribe();
        // alert("Registered successfully");
        Swal.fire('Registered successfully','','success');
        this.router.navigateByUrl("/login");
      }
    }
    else{
      // alert("Invalid details!!!")
      Swal.fire('Invalid inputs','','error');
    }
  }

}
