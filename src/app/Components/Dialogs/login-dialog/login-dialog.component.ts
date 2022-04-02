import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { LocalStorageService } from 'src/app/Services/LocalStorageService';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit 
{
  public loginDialogForm = new FormGroup({});

  constructor
  (
    private authService: AuthService, 
    private loginDialog: MatDialog, 
    private localStorageService: LocalStorageService
  ) {}
  
  ngOnInit()
  {
    this.loginDialogForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public async onSubmit()
  {
    if (await this.authService.login(this.loginDialogForm.value))
    {
      this.localStorageService.clearInfo();
      const {email, password} = this.loginDialogForm.value;
      this.localStorageService.setInfo({email, password});

      this.loginDialogForm.disable();
      this.loginDialog.closeAll();
    }
  }

  public async openDialogRegistration()
  {
    this.loginDialog.open(RegistrationDialogComponent);
  }
}