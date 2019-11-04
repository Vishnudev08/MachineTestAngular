import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorContactService } from '../vendor-contact.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
 
  public popoverTitle:string ='Warning';
  public popoverMessage:string ='Do you want to disable?';
  public popoverMessageLogout:string ='Do you want to logout ?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;

  vendors:Observable<Vendor[]>
  searchString:String;
  constructor(private vendorsService: VendorContactService,private authService:AuthService,
                private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    
    this.vendors = this.vendorsService.getVendorList();
    console.log(this.vendors);
  }

  deleteVendor(vnId: number,vendor:Vendor){
    this.vendorsService.deleteVendor(vnId,vendor)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
    }

  updateVendor(vnId:number){
  console.log(vnId);
  this.router.navigate(['updatevendor',vnId]);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
    
  }
  searchByString(searchString){
    console.log("searchString");
    console.log(searchString);
    if(searchString!=null){
      this.vendors=this.vendorsService.searchByString(this.searchString);
    }
    else{
      this.reloadData();
    }
  }
 }

