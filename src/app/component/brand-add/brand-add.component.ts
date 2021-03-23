import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required],

    })
    }
    add(){
      if(this.brandAddForm.valid){
        let productModel =Object.assign({},this.brandAddForm.value) 
        this.brandService.add(productModel).subscribe(response=>{
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
}
