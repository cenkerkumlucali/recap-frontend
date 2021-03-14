import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { RealCar } from 'src/app/models/real-car';
import { CarService } from 'src/app/services/car.service';
import { RealCarService } from 'src/app/services/real-car.service';

@Component({
  selector: 'app-real-car',
  templateUrl: './real-car.component.html',
  styleUrls: ['./real-car.component.css']
})
export class RealCarComponent implements OnInit {
  cars:Car[]=[]
  dataLoaded=false;

  constructor(private carService:RealCarService,
    private activatedRoute:ActivatedRoute,) { }

    ngOnInit(): void {
    
      this.activatedRoute.params.subscribe(params=>{
        if(params["brandId"]){
          this.getCarsByBrand(params["brandId"])
        }else{
          this.getCar()
        }
      })
  
    }
getCar(){
this.carService.getCar().subscribe(response=>{
  this.cars=response.data
  this.dataLoaded=true
})

}
getCarsByBrand(brandId:number){
  this.carService.getCarsByBrand(brandId).subscribe(response=>{
    this.cars=response.data
    this.dataLoaded=true;
  })
  

 }
}
  