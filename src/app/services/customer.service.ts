import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl='https://localhost:44333/api/Customers/getall'
  constructor(private httpClient:HttpClient) { }
getCustomer():Observable<CustomerResponseModel>{
  return this.httpClient.get<CustomerResponseModel>(this.apiUrl)
}
}
