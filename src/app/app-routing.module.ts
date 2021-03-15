import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './component/car/car.component';

import { CarDetailComponent } from './component/car/car-detail/car-detail.component';


const routes: Routes = [

  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:'cars/detail/:carId', component: CarDetailComponent },
  {path:"cars/brand/:brandId",component:CarComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
