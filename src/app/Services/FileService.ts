import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class FileService
{
    private maxFileSize: number = 524288000;
    public userDatas: FormData[] = [];

    constructor(private http: HttpClient) {}

    public ChangeFiles(event: any)
    {
      for (var i = 0; i < event.target.files.length; i++)
      {
        let userData = new FormData();
        if (this.ValidationFile(event.target.files[i]))
        {
          userData.append('file_upload', event.target.files[i], event.target.files[i].name);
          this.userDatas.push(userData);
        }
        else this.userDatas = [];
      }
    }
  
    public async AddFiles(userDatas: FormData[]): Promise<void>
    {
      for (var i = 0; i < userDatas.length; i++)
      {
        firstValueFrom(await this.http.post<void>('/api/File', this.userDatas[i]));
      }
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