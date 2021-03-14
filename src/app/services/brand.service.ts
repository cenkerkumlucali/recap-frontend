import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl='https://localhost:44333/api/Brands/getall'
  constructor(private httpClient:HttpClient) { }

  getBrand():Observable<ListResponseModel<Brand>>{
  return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
}
}
