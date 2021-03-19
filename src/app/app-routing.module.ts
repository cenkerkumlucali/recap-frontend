import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './component/car/car.component';

import { CarDetailComponent } from './component/car/car-detail/car-detail.component';
import { CreditCardPaymentComponent } from './component/credit-card-payment/credit-card-payment.component';
import { RentalComponent } from './component/rental/rental.component';


const routes: Routes = [

  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
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
