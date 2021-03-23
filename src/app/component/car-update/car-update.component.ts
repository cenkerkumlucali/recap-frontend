import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  currentCar: Car;
  @Input() carForUpdate:Car

  constructor(private formBuilder: FormBuilder,
              private carService: CarService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.currentCar = this.getCurrentCar();
    console.log(this.carForUpdate)
    this.createCarUpdateForm();
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: [this.carForUpdate?this.carForUpdate.brandId:'', Validators.required],
      colorId: [this.carForUpdate?this.carForUpdate.colorId: '', Validators.required],
      modelYear: [this.carForUpdate?this.carForUpdate.modelYear:'', Validators.required],
      dailyPrice: [this.carForUpdate?this.carForUpdate.dailyPrice:'', Validators.required],
      description: [this.carForUpdate?this.carForUpdate.description:'', Validators.required]
    });
  }

  update() {
    let carModel:Car = Object.assign({}, this.carUpdateForm.value);
carModel.carId=this.carForUpdate.carId
    this.carService.update(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
    }, responseError => {
      console.log(responseError);
      this.toastrService.error(responseError.error.message);
    });
  }

  getCurrentCar() {
    return this.carService.getCurrentCar();
  }
}
