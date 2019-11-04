import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }
  public login(userInfo:User){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    return this.httpService.get<User>(environment.apiUrl+'/login/'+userInfo.username+'/'+userInfo.password)
  }
  
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
 
}