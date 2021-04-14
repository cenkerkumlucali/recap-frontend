import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/colors.service';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  filterColorText:string;
  currentColor: Color;
  colors: Color[] = [];
  dataLoaded = false;
  constructor(
    private colorService: ColorService,
    private router:Router,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getColors();
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }
  getCurrentColorClass(color:Color){
    if(  color==this.currentColor){
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  isCurrentColor(color: Color) {
    if (color == this.currentColor) {
      return true
    } else {
      return false
    }
  }

  isAllColorSelected(){
    if(!this.currentColor){
      return true
    }else{
      return false
    }
  }

 

}