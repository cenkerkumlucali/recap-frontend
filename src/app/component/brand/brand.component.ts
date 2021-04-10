import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/services/auth.service';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { BrandAddComponent } from '../brand-add/brand-add.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [BrandService],
})
export class BrandComponent implements OnInit {
  constructor(private toastrService:ToastrService,
              private brandService: BrandService,
              private authService:AuthService,
              private dialogService:DialogService) {}
 
  brands: Brand[];
  selectedBrand:Brand=null

  dataLoaded = false;
  ngOnInit(): void {
    this.getBrands();

  }

  getBrands(): void {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
      
    });
  }
  deleteBrand(brand:Brand){
    this.brandService.delete(brand).subscribe((response=>{
      this.toastrService.success("Araç ismi silindi")
    
      setTimeout(function(){
        location.reload()
      },400)
    }),errorResponse=>{
      if(errorResponse.error.error.length>0){
        for (let i = 0; i < errorResponse.error.error.length; i++) {
          this.toastrService.error(errorResponse.error.error[i].ErrorMessage,"Doğrulama hatası")
          
        }
      }
    })
  }
  checkToLogin(){
    if(this.authService.isAuthenticated()){
      return true
    }else{
      return false
    }
  }
  add() {
    const ref = this.dialogService.open(BrandAddComponent, {
        header: 'Marka ekle',
        width: '45%',
  
    });
  }

  setSelectedBrand(brand:Brand){
    this.selectedBrand = brand
  }
}