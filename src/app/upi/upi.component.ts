import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss'],
})
export class UpiComponent implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  time = 8;
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/payoption']);
      this.snackBar.open('Payemnt Successfull', null, {
        duration: 2000,
      });
    }, 8000);
  }
}
