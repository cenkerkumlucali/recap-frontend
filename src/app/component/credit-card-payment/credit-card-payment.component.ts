import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

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
  cardExist: Boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['rental']) {
        this.rental = JSON.parse(params['rental']);
      }
    });
  }

  async rentACar() {
    let payment: Payment = {
      expirationDate : this.expirationDate,
      nameOnTheCard: this.nameOnTheCard,
      cardNumber: this.cardNumber,
      cardCvv: this.cardCvv,
    };
    this.cardExist = await this.isCardExist(payment);
    if (this.cardExist) {
      this.payment = await this.getFakeCardByCardNumber(this.cardNumber);
      this.payment.moneyInTheCard =
        this.payment.moneyInTheCard - this.rental.totalRentPrice;
      this.updateCard(payment);
      this.rentalService.addRental(this.rental);
      this.toastrService.success('Arabayı kiraladınız', 'Işlem başarılı');
    } else {
      this.toastrService.error(
        'Bankanız bilgilerinizi onaylamadı',
        'Kart bulunamadı'
      );
    }
  }

  async isCardExist(payment: Payment) {
    return (await this.paymentService.isCardExist(payment).toPromise()).success;
  }

  async getFakeCardByCardNumber(cardNumber: string) {
    return (await this.paymentService.getCardByNumber(cardNumber).toPromise())
      .data[0];
  }

  updateCard(payment: Payment) {
    this.paymentService.updateCard(payment);
  }
}
