import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './component/colors/colors.component';
import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import {HttpClientModule} from '@angular/common/http';

import { CustomerComponent } from './component/customer/customer.component';
import { RentalComponent } from './component/rental/rental.component'

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent
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
