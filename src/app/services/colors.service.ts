import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorsResponseModule } from '../models/colorsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl='https://localhost:44333/api/Colors/getall'
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ColorsResponseModule>{
    return this.httpClient.get<ColorsResponseModule>(this.apiUrl)
  }
}
