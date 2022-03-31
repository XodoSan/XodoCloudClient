import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { User } from "../Entities/User";
import { UserAuthenticateResult } from "../Entities/UserAuthenticateResult";

@Injectable({
    providedIn: "root",
})
export class AuthService
{
    constructor(private http: HttpClient) {}

    public async register(user: User): Promise<Observable<User>>
    {
        let request = this.http.post<User>('/api/User/registration', user);
        firstValueFrom(request);
        
        return request;
    }

    public async login(user: User): Promise<boolean>
    {
        let loginResult: Promise<UserAuthenticateResult>;

        loginResult = firstValueFrom(await this.http.post<UserAuthenticateResult>('/api/User/login', user));
        let isLogined = this.isLogined(new UserAuthenticateResult((await loginResult).isSuccess, (await loginResult).errorMessage))   
        
        return isLogined;
    }
    
    public isSamePasswords(password: string, repeatedPassword: string): boolean
    {
        if (password == repeatedPassword) return true;
        else return false;
    }

    private isLogined(loginResult: UserAuthenticateResult): boolean
    {
        if (loginResult.isSuccess == false)
        {
            alert(loginResult.errorMessage);
            return false;
        }        

        return true;
    }
}