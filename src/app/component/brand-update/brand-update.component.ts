import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  
  brand:Brand;
  brandUpdateForm:FormGroup;
  currentBrand:Brand = {
    brandId:0,
    brandName: ""
  }

@Input() brandForUpdate:Brand

  constructor(private brandService:BrandService,
              private toastrService:ToastrService,
              private activatedRoute:ActivatedRoute,
              private formBuilder:FormBuilder,
              private authService:AuthService) { }

  ngOnInit(): void {

    this.createBrandUpdateForm();
    this.checkToLogin()
  }



  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandName:[this.currentBrand?.brandName,Validators.required]
    })
  }


  ngDoCheck(){
    if ( this.brandForUpdate?.brandName !== this.currentBrand?.brandName) {
      console.log(this.brandForUpdate)
      this.currentBrand.brandName = this.brandForUpdate?.brandName
      this.brandUpdateForm.patchValue({
        brandName:this.currentBrand?.brandName
      })
    }
   
  }

  updateBrand(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value);
      brandModel.brandId=this.brandForUpdate.brandId
      this.brandService.update(brandModel).subscribe(
        response => {
        this.toastrService.success(response.message,"Başarılı")
        setTimeout(()=>{window.location.reload},1500)
        },
        responseError => {
        if(responseError.error.ValidationErrors.length > 0) {
          for(let i=0;i<responseError.error.ValidationErrors.length;i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error")
          }
        }
      })
    }
    else {
      this.toastrService.error("The form is missing.","Attention!")
    }
  }
  checkToLogin(){
    if(this.authService.isAuthenticated()){
      return  true;
    }else{
      return false;
    }
  }

}
