import { Injectable } from '@angular/core';
import { UserDetails } from '../models/UserDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  public userdetails=new UserDetails;
  
  public currentMovie:any;
  public currentSeats:any[]=[];
  public currentPrice:any;
  public currentBarcode:any;

  requestHeader=new HttpHeaders({"No-Auth":"True"});
  // responseHeader=new HttpHeaders({"Access-control-alow-origin":"*"});

  constructor(private http:HttpClient) { }
  addUserDetails(userdetails:any){
    return this.http.post('http://localhost:8081/addUserDetails',userdetails,{responseType:'text'});
  }
  getUserDetails():Observable<UserDetails>{
    return this.http.get<UserDetails>('http://localhost:8081/users');
  }
  verifyuser(userdetails: any){
    return this.http.post('http://localhost:8081/login',userdetails,{responseType:'text'});
  }
  updateUser(email: any,userdetails: any){
    return this.http.put(`http://localhost:8081/updateUserDetails/${email}`,userdetails,{responseType:'text'});
  }
  getUpdatedUser(email: any):Observable<UserDetails>{
    return this.http.get<UserDetails>(`http://localhost:8081/users/${email}`);
  }
  verifyforgetuser(userdetails: any){
    return this.http.post('http://localhost:8081/forgetlogin',userdetails,{responseType:'text'});
  }
  addBookingDetails(userdetails:any){
    return this.http.post('http://localhost:8082/addBookingDetails',userdetails,{responseType:'text'});
  }
  getBookingDetails():Observable<UserDetails>{
    return this.http.get<UserDetails>('http://localhost:8082/bookingDetails');
  }
  addBookingDetails2(userdetails:any){
    return this.http.post('http://localhost:8083/addBookingDetails2',userdetails,{responseType:'text'});
  }
  getBookingDetails2():Observable<UserDetails>{
    return this.http.get<UserDetails>('http://localhost:8083/bookingDetails2');
  }
  

}
