import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{ NgxPaginationModule } from'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToastrModule,ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LoginComponent } from './login/login.component';

import { VendorComponent } from './vendor/vendor.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendorComponent,
    CreateVendorComponent,
    UpdateVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
