import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RentalComponent } from './component/rental/rental.component';
import { CustomerComponent } from './component/customer/customer.component';
import { BrandCategoryComponent } from './component/brand-category/brand-category.component';
import { ColorComponent } from './component/color/color.component';
import { CarDetailComponent } from './component/car/car-detail/car-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { CreditCardPaymentComponent } from './component/credit-card-payment/credit-card-payment.component';
import { CarFilterComponent } from './component/car-filter/car-filter.component';
import { ToastrModule } from 'ngx-toastr';
import { CarAddComponent } from './component/car-add/car-add.component';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { CarUpdateComponent } from './component/car-update/car-update.component';
import { BrandUpdateComponent } from './component/brand-update/brand-update.component';
import { ColorUpdateComponent } from './component/color-update/color-update.component';
import { ColorListComponent } from './component/color-list/color-list.component';
import { LoginComponent } from './component/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './component/register/register.component';
import { JwtHelperService } from '@auth0/angular-jwt';


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
    FilterCarPipePipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    CreditCardPaymentComponent,
    CarFilterComponent,
    CreditCardPaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    ColorListComponent,
    LoginComponent,
    RegisterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
