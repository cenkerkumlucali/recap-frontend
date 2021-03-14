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
  constructor(private httpClient:HttpClient) { }
  getCar():Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl +"Cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getcarsbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

}
