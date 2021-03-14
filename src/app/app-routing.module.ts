import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { RealCarComponent } from './component/car/real-car/real-car.component';




import { RentalComponent } from './component/rental/rental.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ColorsComponent } from './component/colors/colors.component';

const routes: Routes = [

  {path:"",component:CarComponent},
  {path:"car",component:RealCarComponent},
  {path:"cars",component:CarComponent},
 //{path:"cars/brands/:brandId",component:RealCarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorsComponent},
  {path:"rentals",component:RentalComponent},
  {path:"customers",component:CustomerComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
