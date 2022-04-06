import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, timeout } from "rxjs";
import { CheckboxItem } from "../Entities/CheckboxItem";
import { LocalStorageService } from "./LocalStorageService";

@Injectable({
    providedIn: "root",
})
export class FileService
{
    private maxFileSize: number = 524288000;
    public userDatas: FormData[] = [];

    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

    public files: string[] = this.localStorage.readFileInfo();

    public ChangeFiles(event: any)
    {
      for (var i = 0; i < event.target.files.length; i++)
      {
        let userData = new FormData();
        if (this.ValidationFile(event.target.files[i]))
        {
          userData.append('file_upload', event.target.files[i], event.target.files[i].name);
          this.userDatas.push(userData);
          this.files.push(event.target.files[i].name);
        }
        else this.userDatas = [];
      }
    }
  
    public async AddFiles(userDatas: FormData[])
    {
      let requests = userDatas.map(userData => firstValueFrom(this.http.post<void>('/api/File', userData)));      
      Promise.all(requests).then(ok => this.localStorage.setFileInfo(this.files));
    }

    public async GetUserFiles(): Promise<string[]>
    {
      return firstValueFrom(await this.http.get<string[]>('/api/File'));
    }
    
    public async DeleteFiles(items: CheckboxItem[])
    {
      let fileNames = this.GetCheckedValueForDelete(items);
      firstValueFrom(await this.http.post<void>('/api/File/delete', fileNames));

      this.localStorage.setFileInfo(this.files);
    }
    
    public async DownloadFiles(items: CheckboxItem[])
    {
      let baseRequestUrl = 'https://localhost:5001/api/File/download/';
      let fileNames = this.GetCheckedValueForDownload(items);
      
      for (var i = -1; i < fileNames.length; i)
      {
        setTimeout((window.location.href = baseRequestUrl + fileNames[i]), 3000, i++);
      }
    }

    public GetCheckedValueForDownload(items: CheckboxItem[])
    {
      let files: string[] = [];
      for (var i = 0; i < items.length; i++)
      {
        if (items[i].isChecked == true) files.push(items[i].name);
      }

      return files
    }

    public GetCheckedValueForDelete(items: CheckboxItem[])
    {
      let files: string[] = [];
      for (var i = 0; i < items.length; i++)
      {
        if (items[i].isChecked == true) files.push(items[i].name);
        else this.files.push(items[i].name);
      }

      return files
    }
    
    private ValidationFile(file: any): boolean
    {
      if (file.size > this.maxFileSize)
      {
        alert("file size must be no more than 5 megabytes");
      }
      else if (this.userDatas.length > 10)
      {
        alert("You can upload no more than 10 files at a time");
      }
      else
      {
        return true;
      }
  
      return false;
    }    
}