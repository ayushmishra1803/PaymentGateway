import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.scss'],
})
export class NetComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}
  submit(f:NgForm){
    this.router.navigate(['/otp'])
  }
  back(){
    this.router.navigate(['/'])
  }
}
