import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

//   helper = new JwtHelperService();

//  constructor(private authService:AuthService){
//  }

// ngOnInit(){
// const username=localStorage.getItem('token');
// this.authService.userName = this.helper.decodeToken(username)
// console.log(username)
// }
// isLoggedIn(): boolean {
//   return this.authService.loggedIn();
// }
}
