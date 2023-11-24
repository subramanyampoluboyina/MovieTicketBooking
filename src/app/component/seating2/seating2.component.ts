import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/UserDetails';
import { UserdetailsService } from 'src/app/service/userdetails.service';

@Component({
  selector: 'app-seating2',
  templateUrl: './seating2.component.html',
  styleUrls: ['./seating2.component.css']
})
export class Seating2Component implements OnInit {
  constructor(private service: UserdetailsService) {

  }
  public userdetails=new UserDetails;
  public ticket:any;
  
  ngOnInit(): void {
    console.log(this.service.currentPrice);
    console.log(this.service.currentBarcode);
    console.log(this.service.currentSeats.toString());

  }
  
  // public userdetails = new UserDetails;

  // public selectedA1=false;selectedA2=false;selectedA3=false;

  // remove(value: any,arr: any[]){
  //   return arr.filter(item => item !== value)
  // }

  // select(isSelected:boolean,e:any){
  //   if(isSelected==true){
  //     isSelected=!isSelected;
  //     // this.userdetails.booked1.pop();
  //     this.userdetails.selected.delete(e.target.id);
  //     for(let values of this.userdetails.selected.values()){
  //       console.log(values);
  //     }
  //     // console.log(this.userdetails.booked1.toString());
  //     return false;
  //   }
  //   else{
  //     isSelected=!isSelected;
  //     // e.target.style.backgroundColor='deepskyblue';
  //     // this.userdetails.booked1.push(e.target.id);
  //     this.userdetails.selected.set(e.target.id,e.target.innerHTML);
  //     for(let values of this.userdetails.selected.values()){
  //       console.log(values);
  //     }
  //     // console.log(this.userdetails.booked1.toString());
  //     return true;
  //   }
  // }

  // bookTicket() {
  //   this.userdetails.booked1.forEach((divId) => {
  //     const divElement = document.getElementById(divId);
  //     if (divElement) {
  //       divElement.style.pointerEvents = 'none';
  //       divElement.style.backgroundColor = 'lightgray';
  //     }
  //   });
  // }

}

