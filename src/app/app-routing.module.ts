import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';



const routes: Routes = [{path:'',pathMatch:'full',redirectTo:'login'},
                        {path:'login',component:LoginComponent },
                        {path:'vendors',component:VendorComponent },
                        {path:'vendors/addvendor',component:CreateVendorComponent },
                        {path:'updatevendor/:vnId',component:UpdateVendorComponent }
                      
                      
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
