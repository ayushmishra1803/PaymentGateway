import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.component.html',
  styleUrls: ['./paymentoptions.component.scss'],
})
export class PaymentoptionsComponent implements OnInit {
  constructor(private router: Router) {}
  paymentoption = [
    { value: 'Card', name: 'Add Debit/Credit/ATM Card' },
    { value: 'NetBanking', name: 'Net Banking' },
    { value: 'UPI', name: 'Other UPI Apps' },
  ];

  ngOnInit(): void {}
  oncard(){ this.router.navigate(['/card']);}
  upi(){   this.router.navigate(['/upi']);

}
net(){
 this.router.navigate(['/netbanking']);
}
}
