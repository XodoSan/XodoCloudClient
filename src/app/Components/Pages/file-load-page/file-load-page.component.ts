import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from 'src/app/Services/FileService';
import { LocalStorageService } from 'src/app/Services/LocalStorageService';

@Component({
  selector: 'app-file-load-page',
  templateUrl: './file-load-page.component.html',
  styleUrls: ['./file-load-page.component.css']
})
@Injectable({
  providedIn: "root"
})
export class FileLoadPageComponent
{
  public fileService: FileService;

  constructor
  (
    private http: HttpClient, 
    private localStorageService: LocalStorageService,
  )
  {
    this.fileService = new FileService(this.http, this.localStorageService);
  }  
}