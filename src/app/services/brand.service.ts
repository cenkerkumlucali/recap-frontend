import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  currentCar: Brand;
  apiUrl='https://localhost:44333/api/'
  constructor(private httpClient:HttpClient) { }

  getBrand():Observable<ListResponseModel<Brand>>{
  return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"brands/getall")
}
getBrandById(brandId:number):Observable<ItemResponseModel<Brand>> {
  return this.httpClient.get<ItemResponseModel<Brand>>(this.apiUrl + "brands/getbyid?id=" + brandId);
}
add(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)
}
update(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/update",brand)
}
delete(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl +"brands/delete",brand)
}
setCurrentBrand(brand: Brand) {
  this.currentCar = brand;
}

getCurrentBrand() {
  return this.currentCar;
}
}
