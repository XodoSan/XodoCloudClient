import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../Entities/User";
import { LocalStorageRefService } from "./LocalStorageRefService";

@Injectable({ providedIn: 'root' })
export class LocalStorageService 
{
   private _localStorage: Storage;

   constructor(private _localStorageRefService: LocalStorageRefService) 
   {
      this._localStorage = _localStorageRefService.localStorage;
   }

   private _fileData$ = new BehaviorSubject<string[] | null>(null);
   private _userData$ = new BehaviorSubject<User | null>(null);
   public fileData$ = this._fileData$.asObservable();
   public userData$ = this._userData$.asObservable();

   setFileInfo(data: string[])
   {
        const jsonData = JSON.stringify(data);
        this._localStorage.setItem('File', jsonData);
        this._fileData$.next(data);
   }

   readFileInfo()
   {
        const data = JSON.parse(this._localStorage.getItem("File") || '{}');
        return data;
   }

    loadFileInfo() 
    {
        const data = JSON.parse(this._localStorage.getItem("File") || '{}');
        this._fileData$.next(data);
    }

    clearFileInfo() 
    {
        this._localStorage.removeItem('File');
        this._fileData$.next(null);
    }

   setInfo(data: User) 
    {
        const jsonData = JSON.stringify(data);
        this._localStorage.setItem('User', jsonData);
        this._userData$.next(data);
    }

    loadInfo() 
    {
        const data = JSON.parse(this._localStorage.getItem("User") || '{}');
        this._userData$.next(data);
    }

    clearInfo() 
    {
        this._localStorage.removeItem('User');
        this._userData$.next(null);
    }

    clearAllLocalStorage() 
    {
        this._localStorage.clear();
        this._userData$.next(null);
        this._fileData$.next(null);
    }
}