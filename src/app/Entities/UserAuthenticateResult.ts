export class UserAuthenticateResult
{
    public isSuccess: boolean;
    public errorMessage: string;

    constructor(isSuccess: boolean, errorMessage: string)
    {
        this.isSuccess = isSuccess;
        this.errorMessage = errorMessage;
    }
}