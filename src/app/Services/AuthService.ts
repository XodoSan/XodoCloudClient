import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { User } from "../Entities/User";
import { UserAuthenticateResult } from "../Entities/UserAuthenticateResult";

@Injectable({
    providedIn: "root",
})
export class AuthService
{
    constructor(private http: HttpClient) {}

    public async register(user: User): Promise<boolean>
    {
        let registrationResult: Promise<UserAuthenticateResult> = firstValueFrom(
            await this.http.post<UserAuthenticateResult>('/api/User/registration', user)
        );
        
        let isRegistered = this.isAuthenticate(new UserAuthenticateResult(
            (await registrationResult).isSuccess, (await registrationResult).errorMessage)
        );
        
        return isRegistered;
    }

    public async login(user: User): Promise<boolean>
    {
        let loginResult: Promise<UserAuthenticateResult> = firstValueFrom(
            await this.http.post<UserAuthenticateResult>('/api/User/login', user)
        );

        let isLogined = this.isAuthenticate(new UserAuthenticateResult(
            (await loginResult).isSuccess, (await loginResult).errorMessage)
        );
        
        return isLogined;
    }

    public async logOut()
    {
        let user: User = new User("", "");
        
        firstValueFrom(await this.http.post<void>('/api/User/logout', user));
    }
    
    public isSamePasswords(password: string, repeatedPassword: string): boolean
    {
        if (password == repeatedPassword) return true;
        else return false;
    }

    private isAuthenticate(authResult: UserAuthenticateResult): boolean
    {
        if (authResult.isSuccess == false)
        {
            alert(authResult.errorMessage);
            return false;
        }        

        return true;
    }
}