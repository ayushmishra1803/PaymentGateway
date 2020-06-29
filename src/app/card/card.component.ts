import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}
  onsubmit(f: NgForm) {
    this.router.navigate(['/upi']);
  }
  back(){
    this.router.navigate(['/'])
  }
}
