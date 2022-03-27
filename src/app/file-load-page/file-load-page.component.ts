import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-file-load-page',
  templateUrl: './file-load-page.component.html',
  styleUrls: ['./file-load-page.component.css']
})
export class FileLoadPageComponent
{
  constructor(private http: HttpClient){}

  public userFile: File = new File([], "kroll");
  
  public ChangeFiles(event: any)
  {
    this.userFile = event.target.files[0];
  }

  public async AddFiles(): Promise<void>
  {
    console.log(this.userFile);
    firstValueFrom(await this.http.post<void>('/api/File', this.userFile));
  }
}
