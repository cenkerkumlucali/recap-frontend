import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/models/colors';
import { ColorService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
 colors:Colors[]=[]
 dataLoaded=false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor()
  }
getColor(){
this.colorService.getColors().subscribe(response=>{
  this.colors=response.data
  this.dataLoaded=true;
})
}
}
