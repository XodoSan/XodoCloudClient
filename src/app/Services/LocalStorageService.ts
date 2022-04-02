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
      this._localStorage = _localStorageRefService.localStorage
   }

   private _userData$ = new BehaviorSubject<User | null>(null)
   public userData$ = this._userData$.asObservable()

   setInfo(data: User) 
    {
        const jsonData = JSON.stringify(data)
        this._localStorage.setItem('User', jsonData)
        this._userData$.next(data)
    }

    loadInfo() 
    {
        const data = JSON.parse(this._localStorage.getItem("User") || '{}')
        this._userData$.next(data)
    }

    clearInfo() 
    {
        this._localStorage.removeItem('User')
        this._userData$.next(null)
    }

    clearAllLocalStorage() 
    {
        this._localStorage.clear()
        this._userData$.next(null)
    }
}