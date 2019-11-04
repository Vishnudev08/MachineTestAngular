import { Component, OnInit } from '@angular/core';
import { VendorContactService } from '../vendor-contact.service';
import { Vendor } from '../vendor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {


  vendor: Vendor = new Vendor();
  submitted = false;
  addvendorForm: FormGroup;


  constructor(private fb: FormBuilder, private vendorsService: VendorContactService, private toastr: ToastrService,
    private router: Router) { }

  vendors: Observable<Vendor[]>;


  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.addvendorForm = this.fb.group({
      vnName: ['', Validators.required],
      vnAddress: ['', Validators.required],
      vnLocation: ['', Validators.required],
      vnService: ['', Validators.required],
      vnPincode: ['', Validators.required],

      name: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.vendor = new Vendor();
    this.vendor.vnName = this.addvendorForm.controls.vnName.value;
    this.vendor.vnAddress = this.addvendorForm.controls.vnAddress.value;
    this.vendor.vnLocation = this.addvendorForm.controls.vnLocation.value;
    this.vendor.vnService = this.addvendorForm.controls.vnService.value;
    this.vendor.vnPincode = this.addvendorForm.controls.vnPincode.value;

    this.vendor.name = this.addvendorForm.controls.name.value;
    this.vendor.department = this.addvendorForm.controls.department.value;
    this.vendor.email = this.addvendorForm.controls.email.value;
    this.vendor.phone = this.addvendorForm.controls.phone.value;

    // this.vendorsService.duplicatecheck(this.vendor.phone, this.vendor.email).subscribe(
    //   data => {
    //     if (data != null) {
    //       this.toastr.error('Duplicate Entry for email and phone', 'Duplication');
    //       this.router.navigate(['/vendors']);
    //     }
    //   }, error => 
    this.save();
  }
  save() {
    this.vendorsService.createVendor(this.vendor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vendorsService.getVendorList();
    this.gotoList();

  }

  gotoList() {
    this.vendors = this.vendorsService.getVendorList();
    this.vendorsService.getVendorList();
    this.router.navigate(['/vendors']);
  }
  list() {
    this.router.navigate(['/vendors']);
  }

}


