// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ListResponseModel } from '../models/listResponseModel';
// import { RealCar } from '../models/real-car';

// @Injectable({
//   providedIn: 'root'
// })
// export class RealCarService {

// apiUrl='https://localhost:44333/api/'
//   constructor(private httpClient:HttpClient) { }
//   getCar():Observable<ListResponseModel<RealCar>>{
//     let newPath =this.apiUrl +"Cars/getall"
//     return this.httpClient.get<ListResponseModel<RealCar>>(newPath)
//   }
//   getCarsByBrand(brandId:number):Observable<ListResponseModel<RealCar>>{
//     let newPath=this.apiUrl + "Cars/getcarsbybrand?brandId="+brandId
//     return this.httpClient.get<ListResponseModel<RealCar>>(newPath)
//   }
// }
