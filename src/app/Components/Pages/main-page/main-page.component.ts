import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/AuthService';
import { LocalStorageService } from 'src/app/Services/LocalStorageService';
import { DialogOptionsComponent } from '../../Dialogs/dialog-options/dialog-options.component';
import { FileLoadPageComponent } from '../file-load-page/file-load-page.component';

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
    private fileDialog: MatDialog,
    private localStorageService: LocalStorageService,
  ) {}

  async ngOnInit() 
  {
    this.localStorageService.loadInfo();
    this.localStorageService.loadFileInfo();
  }

  public userInfo$ = this.localStorageService.userData$;
  public userFiles$ = this.localStorageService.fileData$;
    
  public async openDialogOptions()
  {
    this.mainDialog.open(DialogOptionsComponent);
  }
  
  public async openDialogFiles()
  {
    this.fileDialog.open(FileLoadPageComponent);
  }

  public async logOut()
  {
    this.authService.logOut();
    this.localStorageService.clearAllLocalStorage();
  }
}
