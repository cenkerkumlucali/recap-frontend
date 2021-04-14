import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/colors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  colors:Color[]=[];
  brands:Brand[]=[];
  dataLoaded = false;
  imageBasePath = environment.imageUrl;
  filterText=""
  filterColorText="";
  filterBrandText="";
  defaultImg="/images/default.jpg"
  colorId:number;
  brandId:number;


  constructor(private carService: CarService,
     private activatedRoute:ActivatedRoute,
     private brandService:BrandService,
     private colorService:ColorService) {}


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      if (params['brandId'] && params['colorId']) {
        this.getFilteredCars(params['brandId'], params['colorId']);
      }
      else {
        this.getCars();
        this.getColors();
        this.getBrands();
      }
    })
  }

  getCars() {
    this.carService.getAllCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }
  getBrands(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands = response.data
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarDetailsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getFilteredCars(brandId: number, colorId: number) {
    if(brandId == null)
    {
      this.carService.getCarDetailsByColor(colorId).subscribe(response => {
        this.cars = response.data;
      })
    }
    else if(colorId == null)
    {
      this.carService.getCarDetailsByBrand(brandId).subscribe(response => {
        this.cars = response.data;
      })
    }
    else{
    this.carService.getCarDetailByFilter(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  }
  getSelectedColorId(colorId: number) {
    if(this.colorId == colorId)
    {
      return true;
    }
    else
    {
      return false;
    }
    
  }

  getSelectedBrandId(brandId: number) {
    if(this.brandId == brandId)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}