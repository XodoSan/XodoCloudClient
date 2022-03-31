import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-dialog-options',
  templateUrl: './dialog-options.component.html',
  styleUrls: ['./dialog-options.component.css']
})
export class DialogOptionsComponent
{
  constructor(private dialog: MatDialog) {}

  public async openDialogRegistration()
  {
    this.dialog.open(RegistrationDialogComponent);
  }

  public async openDialogLogin()
  {
    this.dialog.open(LoginDialogComponent);
  }
}
