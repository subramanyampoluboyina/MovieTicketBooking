import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { UserdetailsService } from 'src/app/service/userdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seating2',
  templateUrl: './seating2.component.html',
  styleUrls: ['./seating2.component.css']
})
export class Seating2Component implements OnInit {
  constructor(private service: UserdetailsService, private router: Router) {

  }
  public userdetails=new UserDetails;
  
  public selectedA1: boolean = false; selectedA2: boolean = false; selectedA3: boolean = false;
  public selectedA4: boolean = false; selectedA5: boolean = false; selectedA6: boolean = false;
  public selectedA7: boolean = false; selectedA8: boolean = false; selectedA9: boolean = false;
  public selectedA10: boolean = false; selectedA11: boolean = false; selectedA12: boolean = false;
  public selectedA13: boolean = false; selectedA14: boolean = false; selectedA15: boolean = false;
  public selectedA16: boolean = false; selectedA17: boolean = false; selectedA18: boolean = false;
  public selectedA19: boolean = false; selectedA20: boolean = false;

  public selectedB1: boolean = false; selectedB2: boolean = false; selectedB3: boolean = false;
  public selectedB4: boolean = false; selectedB5: boolean = false; selectedB6: boolean = false;
  public selectedB7: boolean = false; selectedB8: boolean = false; selectedB9: boolean = false;
  public selectedB10: boolean = false; selectedB11: boolean = false; selectedB12: boolean = false;
  public selectedB13: boolean = false; selectedB14: boolean = false; selectedB15: boolean = false;
  public selectedB16: boolean = false; selectedB17: boolean = false; selectedB18: boolean = false;
  public selectedB19: boolean = false; selectedB20: boolean = false;

  public selectedC1: boolean = false; selectedC2: boolean = false; selectedC3: boolean = false;
  public selectedC4: boolean = false; selectedC5: boolean = false; selectedC6: boolean = false;
  public selectedC7: boolean = false; selectedC8: boolean = false; selectedC9: boolean = false;
  public selectedC10: boolean = false; selectedC11: boolean = false; selectedC12: boolean = false;
  public selectedC13: boolean = false; selectedC14: boolean = false; selectedC15: boolean = false;
  public selectedC16: boolean = false; selectedC17: boolean = false; selectedC18: boolean = false;
  public selectedC19: boolean = false; selectedC20: boolean = false;

  public selectedD1: boolean = false; selectedD2: boolean = false; selectedD3: boolean = false;
  public selectedD4: boolean = false; selectedD5: boolean = false; selectedD6: boolean = false;
  public selectedD7: boolean = false; selectedD8: boolean = false; selectedD9: boolean = false;
  public selectedD10: boolean = false; selectedD11: boolean = false; selectedD12: boolean = false;
  public selectedD13: boolean = false; selectedD14: boolean = false; selectedD15: boolean = false;
  public selectedD16: boolean = false; selectedD17: boolean = false; selectedD18: boolean = false;
  public selectedD19: boolean = false; selectedD20: boolean = false;

  public selectedE1: boolean = false; selectedE2: boolean = false; selectedE3: boolean = false;
  public selectedE4: boolean = false; selectedE5: boolean = false; selectedE6: boolean = false;
  public selectedE7: boolean = false; selectedE8: boolean = false; selectedE9: boolean = false;
  public selectedE10: boolean = false; selectedE11: boolean = false; selectedE12: boolean = false;
  public selectedE13: boolean = false; selectedE14: boolean = false; selectedE15: boolean = false;
  public selectedE16: boolean = false;

  public selectedF1: boolean = false; selectedF2: boolean = false; selectedF3: boolean = false;
  public selectedF4: boolean = false; selectedF5: boolean = false; selectedF6: boolean = false;
  public selectedF7: boolean = false; selectedF8: boolean = false; selectedF9: boolean = false;
  public selectedF10: boolean = false; selectedF11: boolean = false; selectedF12: boolean = false;
  public selectedF13: boolean = false; selectedF14: boolean = false; selectedF15: boolean = false;
  public selectedF16: boolean = false; selectedF17: boolean = false; selectedF18: boolean = false;
  public selectedF19: boolean = false; selectedF20: boolean = false;

  public selectedG1: boolean = false; selectedG2: boolean = false; selectedG3: boolean = false;
  public selectedG4: boolean = false; selectedG5: boolean = false; selectedG6: boolean = false;
  public selectedG7: boolean = false; selectedG8: boolean = false; selectedG9: boolean = false;
  public selectedG10: boolean = false; selectedG11: boolean = false; selectedG12: boolean = false;
  public selectedG13: boolean = false; selectedG14: boolean = false; selectedG15: boolean = false;
  public selectedG16: boolean = false; selectedG17: boolean = false; selectedG18: boolean = false;
  public selectedG19: boolean = false; selectedG20: boolean = false;

  public selectedH1: boolean = false; selectedH2: boolean = false; selectedH3: boolean = false;
  public selectedH4: boolean = false; selectedH5: boolean = false; selectedH6: boolean = false;
  public selectedH7: boolean = false; selectedH8: boolean = false; selectedH9: boolean = false;
  public selectedH10: boolean = false; selectedH11: boolean = false; selectedH12: boolean = false;
  public selectedH13: boolean = false; selectedH14: boolean = false; selectedH15: boolean = false;
  public selectedH16: boolean = false; selectedH17: boolean = false; selectedH18: boolean = false;
  public selectedH19: boolean = false; selectedH20: boolean = false;

  public selectedI1: boolean = false; selectedI2: boolean = false; selectedI3: boolean = false;
  public selectedI4: boolean = false; selectedI5: boolean = false; selectedI6: boolean = false;
  public selectedI7: boolean = false; selectedI8: boolean = false; selectedI9: boolean = false;
  public selectedI10: boolean = false; selectedI11: boolean = false; selectedI12: boolean = false;
  public selectedI13: boolean = false; selectedI14: boolean = false; selectedI15: boolean = false;
  public selectedI16: boolean = false; selectedI17: boolean = false; selectedI18: boolean = false;
  public selectedI19: boolean = false; selectedI20: boolean = false;

  public selectedJ1: boolean = false; selectedJ2: boolean = false; selectedJ3: boolean = false;
  public selectedJ4: boolean = false; selectedJ5: boolean = false; selectedJ6: boolean = false;
  public selectedJ7: boolean = false; selectedJ8: boolean = false; selectedJ9: boolean = false;
  public selectedJ10: boolean = false; selectedJ11: boolean = false; selectedJ12: boolean = false;
  public selectedJ13: boolean = false; selectedJ14: boolean = false; selectedJ15: boolean = false;
  public selectedJ16: boolean = false; selectedJ17: boolean = false; selectedJ18: boolean = false;
  public selectedJ19: boolean = false; selectedJ20: boolean = false;

  public selectedK1: boolean = false; selectedK2: boolean = false; selectedK3: boolean = false;
  public selectedK4: boolean = false; selectedK5: boolean = false; selectedK6: boolean = false;
  public selectedK7: boolean = false; selectedK8: boolean = false; selectedK9: boolean = false;
  public selectedK10: boolean = false; selectedK11: boolean = false; selectedK12: boolean = false;
  public selectedK13: boolean = false; selectedK14: boolean = false; selectedK15: boolean = false;
  public selectedK16: boolean = false; selectedK17: boolean = false; selectedK18: boolean = false;
  public selectedK19: boolean = false; selectedK20: boolean = false;

  public selectedL1: boolean = false; selectedL2: boolean = false; selectedL3: boolean = false;
  public selectedL4: boolean = false; selectedL5: boolean = false; selectedL6: boolean = false;
  public selectedL7: boolean = false; selectedL8: boolean = false; selectedL9: boolean = false;
  public selectedL10: boolean = false; selectedL11: boolean = false; selectedL12: boolean = false;
  public selectedL13: boolean = false; selectedL14: boolean = false; selectedL15: boolean = false;
  public selectedL16: boolean = false; selectedL17: boolean = false; selectedL18: boolean = false;
  public selectedL19: boolean = false; selectedL20: boolean = false;

  public selectedM1: boolean = false; selectedM2: boolean = false; selectedM3: boolean = false;
  public selectedM4: boolean = false; selectedM5: boolean = false; selectedM6: boolean = false;
  public selectedM7: boolean = false; selectedM8: boolean = false; selectedM9: boolean = false;
  public selectedM10: boolean = false; selectedM11: boolean = false; selectedM12: boolean = false;
  public selectedM13: boolean = false; selectedM14: boolean = false; selectedM15: boolean = false;
  public selectedM16: boolean = false; selectedM17: boolean = false; selectedM18: boolean = false;
  public selectedM19: boolean = false; selectedM20: boolean = false;

  public selectedN1: boolean = false; selectedN2: boolean = false; selectedN3: boolean = false;
  public selectedN4: boolean = false; selectedN5: boolean = false; selectedN6: boolean = false;
  public selectedN7: boolean = false; selectedN8: boolean = false; selectedN9: boolean = false;
  public selectedN10: boolean = false; selectedN11: boolean = false; selectedN12: boolean = false;
  public selectedN13: boolean = false; selectedN14: boolean = false; selectedN15: boolean = false;
  public selectedN16: boolean = false; selectedN17: boolean = false; selectedN18: boolean = false;
  public selectedN19: boolean = false; selectedN20: boolean = false;

  public selectedO1: boolean = false; selectedO2: boolean = false; selectedO3: boolean = false;
  public selectedO4: boolean = false; selectedO5: boolean = false; selectedO6: boolean = false;
  public selectedO7: boolean = false; selectedO8: boolean = false; selectedO9: boolean = false;
  public selectedO10: boolean = false; selectedO11: boolean = false; selectedO12: boolean = false;
  public selectedO13: boolean = false; selectedO14: boolean = false; selectedO15: boolean = false;
  public selectedO16: boolean = false; selectedO17: boolean = false; selectedO18: boolean = false;
  public selectedO19: boolean = false; selectedO20: boolean = false;

  public selectedP1: boolean = false; selectedP2: boolean = false; selectedP3: boolean = false;
  public selectedP4: boolean = false; selectedP5: boolean = false; selectedP6: boolean = false;
  public selectedP7: boolean = false; selectedP8: boolean = false; selectedP9: boolean = false;
  public selectedP10: boolean = false; selectedP11: boolean = false; selectedP12: boolean = false;
  public selectedP13: boolean = false; selectedP14: boolean = false; selectedP15: boolean = false;
  public selectedP16: boolean = false; selectedP17: boolean = false; selectedP18: boolean = false;
  public selectedP19: boolean = false; selectedP20: boolean = false;

  public selectedQ1: boolean = false; selectedQ2: boolean = false; selectedQ3: boolean = false;
  public selectedQ4: boolean = false; selectedQ5: boolean = false; selectedQ6: boolean = false;
  public selectedQ7: boolean = false; selectedQ8: boolean = false; selectedQ9: boolean = false;
  public selectedQ10: boolean = false; selectedQ11: boolean = false; selectedQ12: boolean = false;
  public selectedQ13: boolean = false; selectedQ14: boolean = false; selectedQ15: boolean = false;
  public selectedQ16: boolean = false; selectedQ17: boolean = false; selectedQ18: boolean = false;
  public selectedQ19: boolean = false; selectedQ20: boolean = false;

  public selectedR1: boolean = false; selectedR2: boolean = false; selectedR3: boolean = false;
  public selectedR4: boolean = false; selectedR5: boolean = false; selectedR6: boolean = false;
  public selectedR7: boolean = false; selectedR8: boolean = false; selectedR9: boolean = false;
  public selectedR10: boolean = false; selectedR11: boolean = false; selectedR12: boolean = false;
  public selectedR13: boolean = false; selectedR14: boolean = false; selectedR15: boolean = false;
  public selectedR16: boolean = false;


  public selectedS1: boolean = false; selectedS2: boolean = false; selectedS3: boolean = false;
  public selectedS4: boolean = false; selectedS5: boolean = false; selectedS6: boolean = false;
  public selectedS7: boolean = false; selectedS8: boolean = false; selectedS9: boolean = false;
  public selectedS10: boolean = false; selectedS11: boolean = false; selectedS12: boolean = false;
  public selectedS13: boolean = false; selectedS14: boolean = false; selectedS15: boolean = false;
  public selectedS16: boolean = false;

  public selectedT1: boolean = false; selectedT2: boolean = false; selectedT3: boolean = false;
  public selectedT4: boolean = false; selectedT5: boolean = false; selectedT6: boolean = false;
  public selectedT7: boolean = false; selectedT8: boolean = false; selectedT9: boolean = false;
  public selectedT10: boolean = false; selectedT11: boolean = false; selectedT12: boolean = false;
  public selectedT13: boolean = false; selectedT14: boolean = false;

  public selectedU1: boolean = false; selectedU2: boolean = false; selectedU3: boolean = false;
  public selectedU4: boolean = false; selectedU5: boolean = false; selectedU6: boolean = false;
  public selectedU7: boolean = false; selectedU8: boolean = false; selectedU9: boolean = false;
  public selectedU10: boolean = false; selectedU11: boolean = false; selectedU12: boolean = false;
  public selectedU13: boolean = false; selectedU14: boolean = false;

  public balcony = 150;
  public firstclass = 120;
  public secondclass = 100;

  public count=0;
  public totalprice=0;
  public barcode:any;
  public movie="Animal";

  public selected=new Map<string,string>();
  public selectedSeats:any[]=[];

  public bookingDetails:any;
  public bookedSeats:any[]=[];

  ngOnInit(): void {
    // console.log(this.bookedSeats.toString());
    this.getBookingDetails2();
    
    
  }
  
  getBookingDetails2(){
    this.service.getBookingDetails2().subscribe(data=>{
      this.bookingDetails=data;
      for(let val of this.bookingDetails){
        for(let item of val.seats2){
          this.bookedSeats.push(item);
        }
      }
      console.log(this.bookedSeats.toString());
    })
  }

  changecolor(color: boolean, amount: number,e:any) {
    if (color == true) {
      color = false;
      this.count--;
      this.userdetails.count=this.count;
      this.totalprice = this.totalprice - amount;
      // this.userdetails.price=this.totalprice;
      // this.userdetails.seats.pop();
      this.selected.delete(e.target.id);
      return false;
    }
    else {
      color = true;
      this.count++;
      this.userdetails.count=this.count;
      this.totalprice = this.totalprice + amount;
      // this.userdetails.price=this.totalprice;
      // this.userdetails.seats.push(e.target.innerHTML);
      this.selected.set(e.target.id,e.target.innerHTML);
      for(let values of this.selected.values()){
        console.log(values);
      }
      return true;
    }
  }

  
  // public booked=false;
  bookTicket(){
    // console.log(this.userdetails.booked.size);
    this.barcode=Math.round(1000000000+Math.random()*(9999999999-1000000000));
    for(let val of this.selected.values()){
      this.selectedSeats.push(val);
    }
    if(this.selectedSeats.length===0){
      // alert("Select seats!!!");
      Swal.fire('Select seats','','error');
    }
    else{
      // this.booked=true;
      this.service.currentMovie=this.movie;
      this.service.currentSeats=this.selectedSeats;
      this.service.currentPrice=this.totalprice;
      this.service.currentBarcode=this.barcode;
      // this.service.addBookingDetails(this.userdetails).subscribe(data=>{
      // });
      this.router.navigateByUrl('/payment1');
      // alert("Tickets Booked Successfully.");
      // Swal.fire('Booked','Tickets booked successfully','success');
    }
  }

}

