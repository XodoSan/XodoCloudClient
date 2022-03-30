import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { User } from "../Entities/User";

@Injectable({
    providedIn: "root",
})
export class AuthService
{
    constructor(private http: HttpClient) {}

    public register(user: User): Observable<User>
    {
        let request = this.http.post<User>('/api/User/Registration', user);
        firstValueFrom(request);
        return request;
    }   
}