import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = environment.baseUrl;
  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + '/cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}