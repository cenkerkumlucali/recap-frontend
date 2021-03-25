import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(public authService:AuthService,
              private toastrService:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem("token")
  this.toastrService.success("Başarıyla çıkış yapıldı")
  this.router.navigate(['']);
}
}
