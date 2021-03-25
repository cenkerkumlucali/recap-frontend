import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [BrandService],
})
export class BrandComponent implements OnInit {
  constructor(private toastrService:ToastrService,
    private brandService: BrandService) {}
 
  brands: Brand[];
  brand : Brand
  dataLoaded = false;
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
      this.brand=response.data[0]
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
}