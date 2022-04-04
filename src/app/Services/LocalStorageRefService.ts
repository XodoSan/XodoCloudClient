import { Injectable } from "@angular/core";

function getLocalStorage(): Storage {
    return localStorage;
}
  
@Injectable({ providedIn: "root" })
export class LocalStorageRefService 
{
    get localStorage(): Storage 
    {
      return getLocalStorage();
    }

    public setData(data: any) 
    {
        const jsonData = JSON.stringify(data);
        localStorage.setItem('User', jsonData);
    }
     
    public getData() 
    {
        return localStorage.getItem('User');
    }
     
    public removeData(key: any) 
    {
        localStorage.removeItem(key);
    }
}  