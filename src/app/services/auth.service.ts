import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import {  JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl='https://localhost:44333/api/auth/'
  helper= new JwtHelperService();
  decodedToken:any;
  constructor(private httpClient:HttpClient) { }


  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",loginModel)
    this.decodedToken = this.helper.decodeToken('token')
    console.log(this.decodedToken)
  }
  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token)
  }

}
