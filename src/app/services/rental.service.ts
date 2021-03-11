import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl='https://localhost:44333/api/Rentals/getrentaldetails'
  constructor(private httpClient:HttpClient) { }
getRental():Observable<RentalResponseModel>{
  return this.httpClient.get<RentalResponseModel>(this.apiUrl)
}

}
