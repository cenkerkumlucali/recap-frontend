import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerReal } from '../models/customer-real';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl='https://localhost:44333/api/'
  constructor(private httpClient:HttpClient) { }

getCustomer():Observable<ListResponseModel<Customer>>{
  return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+"Customers/getcustomerdetails")
}
getCustomerId(userId:number):Observable<SingleResponseModel<CustomerReal>>{
  let newPath = this.apiUrl + "customers/getbyuserid?userId=" + userId
  return this.httpClient.get<SingleResponseModel<CustomerReal>>(newPath)
}
customerUpdate(customer:Customer):Observable<ResponseModel>{
  let newPath = this.apiUrl + "customers/update"
  return this.httpClient.post<ResponseModel>(newPath,customer)
}
}
