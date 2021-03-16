import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl='https://localhost:44333/api/'

constructor(private httpClient: HttpClient) { }

getCarDetailsByBrand(brandId:number){
  let newPath = this.apiUrl + "cars/getbybrand?brandId=" + brandId;
  return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
    
}

getCarDetailsByColor(colorId:number){
  let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId;
  return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
}
getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + 'cars/getcardetail?carId='+carId
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}
getCarDetails():Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "cars/getcardetails"
  return this.httpClient.get<ListResponseModel<Car>>(newPath)
}
}
