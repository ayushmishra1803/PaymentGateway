import { MaterialModule } from './module/material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpiComponent } from './upi/upi.component';
import { NetComponent } from './net/net.component';
import { CardComponent } from './card/card.component';
import { OptComponent } from './opt/opt.component'
@NgModule({
  declarations: [AppComponent, PaymentoptionsComponent, UpiComponent, NetComponent, CardComponent, OptComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
