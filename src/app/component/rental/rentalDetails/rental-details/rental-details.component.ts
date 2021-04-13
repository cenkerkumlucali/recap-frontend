import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {

  rentals:RentalDto[]=[]
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }
getRentalDetails(){
this.rentalService.getAllRentalDetail().subscribe(response=>{
  this.rentals=response.data
})
}


}
