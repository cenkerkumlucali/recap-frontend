import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import {HttpClientModule} from '@angular/common/http';
import { RentalComponent } from './component/rental/rental.component';
import { CustomerComponent } from './component/customer/customer.component';
import { BrandCategoryComponent } from './component/brand-category/brand-category.component';
import { ColorComponent } from './component/color/color.component';
import { CarDetailComponent } from './component/car/car-detail/car-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,

    CarComponent,
    BrandComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    BrandCategoryComponent,
    ColorComponent,
    CarDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
