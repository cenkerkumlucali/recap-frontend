export interface Payment{
    id?:number;
    nameOnTheCard:string;
    cardNumber:string;
    cardCvv:string;
    moneyInTheCard?:number;
}