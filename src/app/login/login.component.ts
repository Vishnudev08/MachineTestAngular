import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{User} from '../user';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  isSubmitted=false;
  user:User;
  constructor(private authService:AuthService,
   
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.LoginForm=this.formBuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  });
}
  get formControls() { 
    return this.LoginForm.controls; }

  

login(){
  
console.log(this.LoginForm.value);
this.isSubmitted=true;
if(this.LoginForm.valid){
  
  this.authService.login(this.LoginForm.value).subscribe(
    data =>{
      //this.user=data;
      console.log(data);
      console.log(data.username);
      sessionStorage.setItem('user',data.username);
    if(data.roleId !=null&& data.roleId ==1){
       this.isSubmitted=true;
       
      console.log('admin');
      this.router.navigateByUrl('/vendors');
     
    }
   else{
     console.log('user');
   
    }
    }
    
  );
  } 
    
 }
}