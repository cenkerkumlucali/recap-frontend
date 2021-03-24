import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [BrandService],
})
export class BrandComponent implements OnInit {
  constructor(private brandService: BrandService) {}
 
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
}