export class UserDetails{
    public firstname:any;
    public lastname:any;
    public email:any;
    public password:any;
    public cpassword:any;
    public mobile:any;
    public terms:any;
    public seats1:string[]=[];
    public booked1:string[]=[];
    public selected1:string[]=[];
    public barcode:any;
    public totalprice:any;
    public count:any;
    public selected=new Map<string,string>();
    public booked=new Map<string,string>();
}