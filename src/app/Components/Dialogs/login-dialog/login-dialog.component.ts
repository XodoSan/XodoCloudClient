import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit 
{
  public form = new FormGroup({});

  constructor(private auth: AuthService, private dialog: MatDialog) {}

  ngOnInit()
  {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public onSubmit()
  {
    this.form.disable();
    this.auth.login(this.form.value);
  }

  public openDialogRegistration()
  {
    this.dialog.open(RegistrationDialogComponent);
  }
}
