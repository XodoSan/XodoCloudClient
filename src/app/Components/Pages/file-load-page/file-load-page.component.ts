import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from 'src/app/Services/FileService';

@Component({
  selector: 'app-file-load-page',
  templateUrl: './file-load-page.component.html',
  styleUrls: ['./file-load-page.component.css']
})
export class FileLoadPageComponent
{
  public FileService: FileService;

  constructor(private http: HttpClient)
  {
    this.FileService = new FileService(this.http);
  }  
}