import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seating1',
  templateUrl: './seating1.component.html',
  styleUrls: ['./seating1.component.css']
})
export class Seating1Component implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }
  toggle:boolean =false;
  selected:string='white';
  select(e: any){
    
    console.log(e);
    console.log(e.target.value);
    this.toggle=!this.toggle;
    if(this.toggle==true){
      this.selected='deepskyblue';
    }
    else{
      this.selected='white';
    }
  }

}
