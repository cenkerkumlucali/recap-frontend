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
import { LoginComponent } from './component/login/login.component';
import { LoginGuard } from './guard/login.guard';
import { RegisterComponent } from './component/register/register.component';
import { ProfilUpdateComponent } from './component/profil/profil-update/profil-update.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [

  {path:"",component:HomeComponent},

  {path:"cars",component:CarComponent},
  
  {path:"brands",component:BrandComponent},

  {path:"colors",component:ColorListComponent},

  {path:"login",component:LoginComponent},

  {path:"register",component:RegisterComponent},

  {path:"profil",component:ProfilUpdateComponent},

  {path:"cars/add", component:CarAddComponent,canActivate:[LoginGuard]},

  {path:"cars/update/:carId", component:CarUpdateComponent},

  {path:"cars/color/:colorId",component:CarComponent},

  {path:'cars/detail/:carId', component: CarDetailComponent },

  {path:"cars/brand/:brandId",component:CarComponent},

  {path:"cars/filter/:brandId/:colorId",component:CarComponent},

  {path:"rental/:carId", component:RentalComponent,canActivate:[LoginGuard]},
  
  {path:"creditcard/:rental", component:CreditCardPaymentComponent,canActivate:[LoginGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
