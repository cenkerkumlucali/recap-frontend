import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { AuthService } from 'src/app/services/auth.service';
import { ColorService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
 color:Color
 currentColor:Color = {
   colorId:0,
   colorName:""
 }
colorUpdateForm:FormGroup

@Input() colorForUpdate:Color
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private authService:AuthService) { }
 

  ngOnInit(): void {
        this.createColorUpdateForm();
      
  }

createColorUpdateForm(){
  this.colorUpdateForm=this.formBuilder.group({

    colorName:[this.colorForUpdate?this.colorForUpdate.colorName:"",Validators.required]
  })
}
ngDoCheck(){
  if(this.colorForUpdate?.colorName !== this.currentColor?.colorName){
    console.log(this.colorForUpdate)
    this.currentColor.colorName = this.colorForUpdate?.colorName
    this.colorUpdateForm.patchValue({
      colorName:this.currentColor?.colorName
    })
  }
}
updateColor(){
  if(this.colorUpdateForm.valid){
    let colorModel = Object.assign({},this.colorUpdateForm.value)
    colorModel.colorId=this.colorForUpdate.colorId
    
    this.colorService.update(colorModel).subscribe((response)=>{
      this.toastrService.success(response.message,"Başarılı")
    },responseError =>{
      if(responseError.error.ValidationErrors.length>0){
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error")
          
        }
      }
    })
  }
  else {
    this.toastrService.error("Form bilgisi hatalı","Tekrar kontrol ediniz")
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
