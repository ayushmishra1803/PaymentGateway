import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.component.html',
  styleUrls: ['./paymentoptions.component.scss'],
})
export class PaymentoptionsComponent implements OnInit {
  constructor(private router:Router) {}
  paymentoption = [
    { value: 'Card', name: 'Add Debit/Credit/ATM Card' },
    { value: 'NetBanking', name: 'Net Banking' },
    { value: 'UPI', name: 'Other UPI Apps' },
  ];

  ngOnInit(): void {}
  onsubmit(f: NgForm) {
   if(f.value.option==="Card"){
   this.router.navigate(['/card']);

   }
   if(f.value.option==="NetBanking"){
     this.router.navigate(['/netbanking']);

   }
   if(f.value.option==="UPI")
   {
      this.router.navigate(['/upi']);

   }
  }
}
