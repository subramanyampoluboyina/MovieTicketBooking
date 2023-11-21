import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/service/userdetails.service';

@Component({
  selector: 'app-ticket1',
  templateUrl: './ticket1.component.html',
  styleUrls: ['./ticket1.component.css']
})
export class Ticket1Component implements OnInit {
  constructor(private service:UserdetailsService, private router:Router){

  }
  public userdetails:any;
  ngOnInit(): void {
    this.getBookingDetails();
  }
  getBookingDetails(){
    this.service.getBookingDetails().subscribe(data=>{
      this.userdetails=data;
    })
  }
  

}
