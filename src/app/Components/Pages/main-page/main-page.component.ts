import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { LocalStorageService } from 'src/app/Services/LocalStorageService';
import { DialogOptionsComponent } from '../../Dialogs/dialog-options/dialog-options.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
@Injectable({providedIn: "root"})
export class MainPageComponent implements OnInit
{
  constructor
  (
    private authService: AuthService, 
    private mainDialog: MatDialog, 
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() 
  {
    this.localStorageService.loadInfo();
  }

  public userInfo$ = this.localStorageService.userData$;

  public async openDialogOptions()
  {
    this.mainDialog.open(DialogOptionsComponent);
  }
  
  public async logOut()
  {
    await this.authService.logOut();
    this.localStorageService.clearAllLocalStorage();
  }
}
