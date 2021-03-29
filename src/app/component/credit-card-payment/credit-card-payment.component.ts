import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerCreditCardService } from 'src/app/services/customer-credit-card.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css'],
})
export class CreditCardPaymentComponent implements OnInit {
  rental: Rental;
  nameOnTheCard: string;
  cardNumber: string;
  cardCvv: string;
  expirationDate:string;
  payment: Payment;
  savedCards: Payment[]=[];
  cardExist: Boolean = false;
  creditCardForm: FormGroup;
  selectedCard: Payment;
 
  constructor(

    private paymentService: PaymentService,
    private rentalService: RentalService,
    private router:Router,
    private toastrService: ToastrService,
    private customerCreditCardService:CustomerCreditCardService,
    private authService:AuthService,
    private confirmationService: ConfirmationService,
    private config: DynamicDialogConfig,
    private formBuilder:FormBuilder,
    
  ) {}

  ngOnInit(): void {
    this.getRental()
    this.setCreditCardForm();
    this.getSavedCards()
    
  }
  getRental(){
    this.rental = this.config.data.rental
  }

  setCreditCardForm(){
    this.creditCardForm = this.formBuilder.group({
      savedCards: [""],
      nameOnTheCard: ["",Validators.required],
      cardNumber: ["", Validators.required],
      cardCvv: ["", Validators.required],
      expirationDate: ["", Validators.required],
    })
  }

  async rentACar(payment:Payment) {
    if(payment.moneyInTheCard>=this.rental.totalRentPrice){
     
      this.updateCard(payment)
      this.rentalService.addRental(this.rental)
      this.toastrService.success("Arabayı kiraladınız","Işlem başarılı")
      this.router.navigate([''])
      setTimeout(function(){
        location.reload()
      },0)
    
    }else {
      this.toastrService.error("Hata")
    }
  } 
  async rent(){
    if(this.creditCardForm.valid){
      let payment:Payment = Object.assign({},this.creditCardForm.value)
      this.cardExist = await this.isCardExist(payment)
      if(this.cardExist){
        let newPayment = await((this.getFakeCardByCardNumber(this.cardNumber))) 
        let wannaSave = await this.isSaved(newPayment)
        if(!wannaSave){
          this.rentACar(newPayment)
        }
      }else{
        this.toastrService.error("Hesap bilgileriniz onaylanmadı","Hata")
      }
    }else{
      this.toastrService.error("Formu doldurmanız gerekli","Hata")
    }
    
  }
  
  async isSaved(payment:Payment):Promise<boolean>{
    let result = false
    let customerId = this.authService.getCurrentUserId();
    let customerCards = (await this.customerCreditCardService.getByCustomerId(customerId).toPromise()).data
    let isContains = customerCards.map(c => c.cardId).includes(payment.id)
    if(!isContains){
      this.wannaSave(payment)
      result =  true
    }
    return result
  }
  wannaSave(payment:Payment){
    this.confirmationService.confirm({
      message:'Kartınız sistemde kayıtlı değil kaydetmek ister misiniz?',
      accept: () => {
        this.saveCard(payment)
        this.rentACar(payment)
      },
      reject: () => {
        this.rentACar(payment)
      }
    })
  }
  saveCard(payment:Payment){
    this.customerCreditCardService.saveCreditCard(payment).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
    });
  }


  saveCreditCard(payment:Payment){
    this.customerCreditCardService.saveCreditCard(payment).subscribe((response)=>{
      this.toastrService.success(response.message,"Kaydedildi")
    })
  }
  async getSavedCards(){
    let customerId = this.authService.getCurrentUserId();
    let customerCards = (await this.customerCreditCardService.getByCustomerId(customerId).toPromise()).data
    customerCards.forEach(card => {
      this.paymentService.getCardById(card.cardId).subscribe(response => {
        this.savedCards.push(response.data)
      })
    });
  }
  async isCardExist(payment: Payment) {
    return (await this.paymentService.isCardExist(payment).toPromise()).success;
  }
  setCardInfos(){
    this.creditCardForm.patchValue(
      this.selectedCard
    )
  }

  async getFakeCardByCardNumber(cardNumber:string):Promise<Payment>{
    return (await (this.paymentService.getCardByNumber(cardNumber)).toPromise()).data[0]
  }

  updateCard(payment:Payment){
    this.paymentService.updateCard(payment).subscribe();
  }
  
}
