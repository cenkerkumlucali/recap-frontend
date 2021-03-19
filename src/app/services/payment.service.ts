import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  
  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://localhost:44333/api/';

  isCardExist(payment:Payment):Observable<ResponseModel>{
    let newPath = this.apiUrl + "fakecards/iscardexist"
    console.log("pepepe")
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }

  getCardByNumber(cardNumber:string):Observable<ListResponseModel<Payment>>{
    let newPath = this.apiUrl + "fakecards/getbycardnumber?cardnumber=" + cardNumber
    return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  }

  updateCard(payment:Payment){
    let newPath = this.apiUrl + "fakecards/update"
    this.httpClient.put(newPath,payment)
  }

}
