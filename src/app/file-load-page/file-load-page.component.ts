import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-file-load-page',
  templateUrl: './file-load-page.component.html',
  styleUrls: ['./file-load-page.component.css']
})
export class FileLoadPageComponent
{
  constructor(private http: HttpClient){}

  public userDatas: FormData[] = [];

  public ChangeFiles(event: any)
  {
    for(var i = 0; i < event.target.files.length; i++)
    {
      let userData = new FormData();
      userData.append('file_upload', event.target.files[i], event.target.files[i].name);
      this.userDatas.push(userData);
    }
  }

  public async AddFiles(userDatas: FormData[]): Promise<void>
  {
    console.log(this.userDatas);
    for(var i = 0; i < userDatas.length; i++)
    {
      firstValueFrom(await this.http.post<void>('/api/File', this.userDatas[i]));
    }
  }
}