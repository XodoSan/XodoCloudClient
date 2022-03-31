import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOptionsComponent } from '../../Dialogs/dialog-options/dialog-options.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent
{
  constructor(private mainDialog: MatDialog) {}

  public async openDialogOptions()
  {
    this.mainDialog.open(DialogOptionsComponent);
  }
}
