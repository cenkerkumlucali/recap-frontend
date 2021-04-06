import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { AuthService } from 'src/app/services/auth.service';
import { ColorService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
 colors:Color[]
 isAuthenticated :boolean
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.getColors()
  }

getColors(){
  this.colorService.getColors().subscribe((response)=>{
    this.colors=response.data
  })
}
deleteColor(color:Color){
  this.colorService.delete(color).subscribe((response)=>{
    this.toastrService.error("Renk silindi")
    setTimeout(()=>{window.location.reload},1500)
  })
}
checkToLogin(){
  if(this.authService.isAuthenticated()){
    return  true;
  }else{
    return false;
  }
}

}
