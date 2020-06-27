import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.scss'],
})
export class OptComponent implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar) {}
  isloading = false;

  ngOnInit(): void {}
  submit(f: NgForm) {

    this.isloading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
      this.snackBar.open('Payemnt Successfull', null, {
        duration: 2000,
      });
    }, 8000);

  }
}
