import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss'],
})
export class UpiComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}
  submit(f: NgForm) {
    this.router.navigate(['/otp'])
  }
  back(){
    this.router.navigate(['/']);
  }
}
