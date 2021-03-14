import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl='https://localhost:44333/api/Customers/getall'
  constructor(private httpClient:HttpClient) { }
getCustomer():Observable<ListResponseModel<Customer>>{
  return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
}
}
