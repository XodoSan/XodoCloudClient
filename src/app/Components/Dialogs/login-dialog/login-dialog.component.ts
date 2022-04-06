import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { FileService } from 'src/app/Services/FileService';
import { LocalStorageService } from 'src/app/Services/LocalStorageService';
import { MainPageComponent } from '../../Pages/main-page/main-page.component';
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
    private localStorageService: LocalStorageService,
    private fileService: FileService,
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
      const {email, password} = this.loginDialogForm.value;
      this.localStorageService.setInfo({email, password});

      this.fileService.files = await this.fileService.GetUserFiles();
      this.localStorageService.setFileInfo(this.fileService.files);
      
      this.loginDialogForm.disable();
      this.loginDialog.closeAll();
    }
  }

  public async openDialogRegistration()
  {
    this.loginDialog.open(RegistrationDialogComponent);
  }
}