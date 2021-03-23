import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

apiUrl='https://localhost:44333/api/'
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"Colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }
}
