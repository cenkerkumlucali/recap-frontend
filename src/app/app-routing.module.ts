import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './component/car/car.component';

import { CarDetailComponent } from './component/car/car-detail/car-detail.component';
import { CreditCardPaymentComponent } from './component/credit-card-payment/credit-card-payment.component';
import { RentalComponent } from './component/rental/rental.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { CarUpdateComponent } from './component/car-update/car-update.component';
import { BrandComponent } from './component/brand/brand.component';
import { BrandUpdateComponent } from './component/brand-update/brand-update.component';
import { ColorListComponent } from './component/color-list/color-list.component';
import { ColorUpdateComponent } from './component/color-update/color-update.component';


const routes: Routes = [

  {path:"",component:CarComponent},

  {path:"cars",component:CarComponent},
  
  {path:"brands",component:BrandComponent},

  {path:"colors",component:ColorListComponent},

  {path:"cars/add", component:CarAddComponent},

  {path:"cars/update/:carId", component:CarUpdateComponent},

  {path:"brands/update/:brandId", component:BrandUpdateComponent},

  {path:"colors/update/:colorId", component:ColorUpdateComponent},


  {path:"brands/add", component:BrandAddComponent},

  {path:"colors/add", component:ColorAddComponent},

  {path:"cars/color/:colorId",component:CarComponent},

  {path:'cars/detail/:carId', component: CarDetailComponent },

  {path:"cars/brand/:brandId",component:CarComponent},

  {path:"cars/filter/:brandId/:colorId",component:CarComponent},

  {path:"rental/:carId", component:RentalComponent},
  
  {path:"creditcard/:rental", component:CreditCardPaymentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
