export class User
{
    public email: string;
    public passwordHash: string;

    constructor(email: string, passwordHash: string)
    {
        this.email = email;
        this.passwordHash = passwordHash;
    }
}