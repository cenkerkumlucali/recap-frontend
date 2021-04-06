import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService} from "@auth0/angular-jwt";
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserId: number;
  jwtHelperService:JwtHelperService = new JwtHelperService();
  apiUrl='https://localhost:44333/api/'

  constructor(private httpClient:HttpClient,
    private storageService:LocalStorageService,
   ) {this.setUserStats() }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'auth/login',loginModel);
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'auth/register',registerModel);
  }

  isAuthenticated(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
  setCurrentUserId(){
    var decoded = this.getDecodedToken()
    var propUserId = Object.keys(decoded).filter(x => x.endsWith("/nameidentifier"))[0];
    this.currentUserId = Number(decoded[propUserId]);
  }

  getCurrentUserId():number {
    return this.currentUserId
  }
  getDecodedToken(){
    try{
      return this.jwtHelperService.decodeToken(this.storageService.getToken());
    }
    catch(Error){
        return null;
    }
  }
  async setUserStats(){
    if(this.loggedIn()){
      this.setCurrentUserId()
      
    
    }
  }
 
  logout(){
    this.storageService.remove("token");
  }
  loggedIn(): boolean {
    let isExpired = this.jwtHelperService.isTokenExpired(this.storageService.getToken());
    return !isExpired;
  }
}
