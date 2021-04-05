import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/colors.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup
  colors:Color[]=[]
  brands:Brand[]=[]

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private carService:CarService,
    private carImageService:CarImageService,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.createCarAddForm()
    this.getBrand()
    this.getColor()
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
    colorId:["",Validators.required],
    brandId:["",Validators.required],
    modelYear:["",Validators.required],
    dailyPrice:["",Validators.required],
    description:["",Validators.required],
    minFindeksScore:["",Validators.required],
    })
    }
    add(){
      if(this.carAddForm.valid){
        let carModel =Object.assign({},this.carAddForm.value) 
        this.carService.add(carModel).subscribe(response=>{
          this.toastrService.success(response.message,"Başarılı")
        },responseError=>{
          if(responseError.error.ValidationErrors.length>0){
            console.log(responseError.error.Errors)
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
  
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası"
              )
            }
          }
        })
      }else{
        this.toastrService.error("Formunuz eksik","Dikkat")
      }
    }
    getBrand(){
      this.brandService.getBrand().subscribe(response=>{
        this.brands = response.data
      })
    }
    getColor(){
      this.colorService.getColors().subscribe(response=>{
        this.colors = response.data
      })
    }
}
