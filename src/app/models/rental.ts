export interface Rental{
    id?:number;
    carId:number;
    customerId?:number;
    rentDate?:Date;
    rentStartDate:Date;
    rentEndDate?:Date;
    returnDate?:Date;
    totalRentPrice?:number;
}