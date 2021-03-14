import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/models/colors';
import { ColorService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-color-category',
  templateUrl: './color-category.component.html',
  styleUrls: ['./color-category.component.css']
})
export class ColorCategoryComponent implements OnInit {
colors:Colors[]=[]
currentColor:Colors;
dataLoaded=false
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
  }
getColors(){
  this.colorService.getColors().subscribe(response=>{
    this.colors = response.data;
    this.dataLoaded=true;
  })

}
setCurrentColor(colors: Colors) {
    this.currentColor = colors;
  }
  getCurrentColorClass(color:Colors){
    if(this.currentColor == color){
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }
  
}