import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brand-category',
  templateUrl: './brand-category.component.html',
  styleUrls: ['./brand-category.component.css']
})
export class BrandCategoryComponent implements OnInit {
  filterBrandText: string;
  brands: Brand[] = [];
  currentBrand?: Brand;
  dataLoaded = false;
  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setQueryParams(brand:Brand){
    if(brand){
      this.setCurrentBrand()
    }else{
      this.clearCurrentBrand()
    }
  }

  setCurrentBrand() {
    this.router.navigate([], { queryParams: { brandId: this.currentBrand?.brandId }, queryParamsHandling: 'merge', relativeTo: this.route});
  }

  isCurrentBrand(brand: Brand) {
    if (brand == this.currentBrand) {
      return true
    } else {
      return false
    }
  }

  isAllBrandSelected(){
    if(!this.currentBrand){
      return true;
    }else{
      return false;
    }
  }

  clearCurrentBrand(){
    this.currentBrand = undefined;
    this.router.navigate(['cars/'], { queryParams: { brandId: undefined }, queryParamsHandling: 'merge', relativeTo: this.route});
  }
}
