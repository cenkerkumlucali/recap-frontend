import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl='https://localhost:44333/api/'
  constructor(private httpClient: HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>> {
    return this.httpClient
      .get<ListResponseModel<CarImage>>(this.apiUrl + 'carimages/getall');
  }
  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient
    .get<ListResponseModel<CarImage>>(this.apiUrl + 'images/getimagesbycarid?carId=' + carId)
  }
  add(carimage:CarImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"images/add",carimage)
  }
}