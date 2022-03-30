import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Entities/User';
import { AuthService } from 'src/app/Services/AuthService';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit
{
  public form = new FormGroup({});

  constructor(private auth: AuthService, private dialog: MatDialog) {}

  ngOnInit()
  {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      repeatedPassword: new FormControl('')
    });
  }

  public onSubmit()
  {
    if (this.auth.IsSamePasswords(this.form.value.password, this.form.value.repeatedPassword))
    {
      this.form.disable();
      this.auth.register(this.form.value);
    }
    else alert('Passwords do not match');
  }
  
  public openDialogLogin()
  {
    this.dialog.open(LoginDialogComponent);
  }
}
