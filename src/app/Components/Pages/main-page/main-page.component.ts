import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { DialogOptionsComponent } from '../../Dialogs/dialog-options/dialog-options.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent
{
  constructor(private mainDialog: MatDialog, private authService: AuthService) {}

  public async openDialogOptions()
  {
    this.mainDialog.open(DialogOptionsComponent);
  }

  public async logOut()
  {
    await this.authService.logOut();
  }
}
