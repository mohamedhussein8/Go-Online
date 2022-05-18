export class AuthUserVM {
    public fullName: string;
    public userName: string;
    public email: string;
    public phoneNumber: string;
    public roles: string[];
    public token: string;
    public expires: Date;
    constructor(_fullName: string = "", _userName: string = "", _email: string = "", 
    _phoneNumber: string = "", _roles = [], _token: string = "", _expires: any = "") {
        this.fullName = _fullName;
        this.userName = _userName;
        this.email = _email;7
        this.phoneNumber = _phoneNumber;
        this.roles = _roles;
        this.token = _token;
        this.expires = (_expires) ? new Date(_expires) : new Date();
    }
}
