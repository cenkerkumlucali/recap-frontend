import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
   currentCar: Car;
apiUrl='https://localhost:44333/api/'

constructor(private httpClient: HttpClient) { }

getByCarId(carId:number):Observable<SingleResponseModel<Car>>{
  let newPath = this.apiUrl +"cars/getbyid?carId="+carId
  return this.httpClient.get<SingleResponseModel<Car>>(newPath)
}

getAllCarDetails():Observable<ListResponseModel<CarDetail>> {
  let newPath = this.apiUrl + "cars/getcardetails"
  return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath);
}

getCarDetailsByBrand(brandId:number){
  let newPath = this.apiUrl + "cars/getbybrand?brandId=" + brandId;
  return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath);
    
}

getCarDetailsByColor(colorId:number){
  let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId;
  return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath);
}

getCarDetails(brandId:number, colorId:number){
  let newPath = this.apiUrl + "cars/getcarsfilterdetails?brandId=" + brandId + "&colorId=" + colorId;
  return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath);
}

getCarDetailsByCarId(carId:number){
  let newPath = this.apiUrl + "cars/getcardetail?carId=" + carId;
  return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath);
}
add(car:Car):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
}
update(car:Car):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
}
setCurrentCar(car: Car) {
  this.currentCar = car;
}

getCurrentCar() {
  return this.currentCar;
}
}
