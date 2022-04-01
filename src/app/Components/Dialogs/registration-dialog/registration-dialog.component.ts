import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit
{
  public regDialogForm = new FormGroup({});

  constructor(private authService: AuthService, private regDialog: MatDialog) {}

  ngOnInit()
  {
    this.regDialogForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      repeatedPassword: new FormControl('')
    });
  }

  public async onSubmit()
  {
    if (this.authService.isSamePasswords(this.regDialogForm.value.password, this.regDialogForm.value.repeatedPassword))
    {
      if (await this.authService.register(this.regDialogForm.value))
      {
        this.regDialogForm.disable();
        this.regDialog.closeAll();
      }
    }
    else alert('Passwords do not match');
  }
  
  public async openDialogLogin()
  {
    this.regDialog.open(LoginDialogComponent);
  }
}