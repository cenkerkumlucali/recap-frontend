import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import {HttpClientModule} from '@angular/common/http';


import { RentalComponent } from './component/rental/rental.component';
import { ListGroupComponent } from './component/list-group/list-group.component';



import { RealCarComponent } from './component/car/real-car/real-car.component';
import { ColorCategoryComponent } from './component/color-category/color-category.component';
import { ColorsComponent } from './component/colors/colors.component';
import { CustomerComponent } from './component/customer/customer.component';
import { BrandCategoryComponent } from './component/brand-category/brand-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    ListGroupComponent,
    BrandCategoryComponent,
 

 
 

    RealCarComponent,
 

    ColorCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
