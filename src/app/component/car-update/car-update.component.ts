import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  currentCar: Car;
  brands:Brand[]=[]
  colors:Color[]=[]
  @Input() carForUpdate:CarDetail

  constructor(private formBuilder: FormBuilder,
              private carService: CarService,
              private toastrService: ToastrService,
              private brandService:BrandService,
              private colorService:ColorService,
              private authService:AuthService) {
  }

  ngOnInit(): void {
    this.currentCar = this.getCurrentCar();
    console.log(this.carForUpdate)
    this.createCarUpdateForm();
    this.getBrands()
    this.getColors()
    
  }
  
  createCarUpdateForm() { 
    this.carUpdateForm = this.formBuilder.group({
      brandId: [this.carForUpdate?this.carForUpdate.brandId:'', Validators.required],
      colorId: [this.carForUpdate?this.carForUpdate.colorId: '', Validators.required],
      modelYear: [this.carForUpdate?this.carForUpdate.modelYear:'', Validators.required],
      dailyPrice: [this.carForUpdate?this.carForUpdate.dailyPrice:'', Validators.required],
      description: [this.carForUpdate?this.carForUpdate.description:'', Validators.required],
      minFindeksScore: [this.carForUpdate?this.carForUpdate.minFindeksScore:'', Validators.required]
    });
  }

  update() {
    let carModel:Car = Object.assign({}, this.carUpdateForm.value);
    carModel.carId=this.carForUpdate.carId
    this.carService.update(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
    }, responseError => {
      this.toastrService.error(responseError.error.message);
    });
  } 
 
  getCurrentCar() {
    return this.carService.getCurrentCar();
  }
  
  getBrands(){
    this.brandService.getBrand().subscribe(response => {
      this.brands = response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
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
