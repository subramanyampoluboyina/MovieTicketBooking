import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seating2',
  templateUrl: './seating2.component.html',
  styleUrls: ['./seating2.component.css']
})
export class Seating2Component implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }
  clicked1:boolean=false;clicked2:boolean=false;clicked3:boolean=false;clicked4:boolean=false;
  // toggle(e:any){
  //   const color1='deepskyblue';
  //   const color2='lightgray';
  //   if(clicked===false){
  //     e.target.style.backgroundColor=color1;
  //     clicked=true
  //   }
  //   else{
  //     e.target.style.backgroundColor='white';
  //     clicked=false;
  //   }
  // }

}
