import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colors } from '../models/colors';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorCategoryService {
apiUrl='https://localhost:44333/api/colors/getall'
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Colors>>{
    return this.httpClient.get<ListResponseModel<Colors>>(this.apiUrl)
  }
}
