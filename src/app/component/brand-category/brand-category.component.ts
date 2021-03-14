import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-category',
  templateUrl: './brand-category.component.html',
  styleUrls: ['./brand-category.component.css']
})
export class BrandCategoryComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
    });
  }
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }
  
}
