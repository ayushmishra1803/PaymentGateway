import { OptComponent } from './opt/opt.component';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';
import { NetComponent } from './net/net.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PaymentoptionsComponent },
  { path: 'payoption', component: PaymentoptionsComponent },
  { path: 'netbanking', component: NetComponent },
  { path: 'card', component: CardComponent },
  { path: 'upi', component: UpiComponent },
  { path: 'otp', component: OptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
