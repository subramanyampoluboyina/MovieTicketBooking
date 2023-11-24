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
  public image:any;
  public back:any;

  movie=this.service.currentMovie;
  seats=this.service.currentSeats;
  price=this.service.currentPrice;
  barcode=this.service.currentBarcode;

  ngOnInit(): void {
    if(this.movie=="Salaar"){
      this.image="/assets/images/SALAAR.jpg";
      this.back="/seating1";
    }
    else if(this.movie=="Animal"){
      this.image="/assets/images/ANIMAL.jpg";
      this.back="/seating2";
    }
    
  }
  
  public userdetails=new UserDetails;

  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.movie=="Salaar"){
        this.userdetails.movie=this.service.currentMovie
      this.userdetails.seats=this.service.currentSeats;
      this.userdetails.price=this.service.currentPrice;
      this.userdetails.barcode=this.service.currentBarcode;
      this.service.addBookingDetails(this.userdetails).subscribe(data=>{
      });
      Swal.fire('Booked','Tickets successfully booked','success');
      this.router.navigateByUrl(this.back);
      }
      else if(this.movie=="Animal"){
        this.userdetails.movie2=this.service.currentMovie
      this.userdetails.seats2=this.service.currentSeats;
      this.userdetails.price2=this.service.currentPrice;
      this.userdetails.barcode2=this.service.currentBarcode;
      this.service.addBookingDetails2(this.userdetails).subscribe(data=>{
      });
      Swal.fire('Booked','Tickets successfully booked','success');
      this.router.navigateByUrl(this.back);
      }
      
    }
    else{
      Swal.fire('Invalid card details','','error');
    }
  }


}
