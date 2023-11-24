import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { UserdetailsService } from 'src/app/service/userdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.component.html',
  styleUrls: ['./payment1.component.css']
})
export class Payment1Component implements OnInit{
  constructor(private service:UserdetailsService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  movie=this.service.currentMovie;
  seats=this.service.currentSeats;
  price=this.service.currentPrice;
  barcode=this.service.currentBarcode;

  public userdetails=new UserDetails;

  OnSubmit(form:NgForm){
    if(form.valid){
      this.userdetails.movie=this.service.currentMovie
      this.userdetails.seats=this.service.currentSeats;
      this.userdetails.price=this.service.currentPrice;
      this.userdetails.barcode=this.service.currentBarcode;
      this.service.addBookingDetails(this.userdetails).subscribe(data=>{
      });
      Swal.fire('Booked','Tickets successfully booked','success');
      this.router.navigateByUrl('/seating1');
    }
    else{
      Swal.fire('Invalid card details','','error');
    }
  }


}
