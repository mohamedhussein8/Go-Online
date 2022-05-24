export class RegisterVM {
    public fullName: string;
    public userName: string;
    public email: string;
    public phoneNumber: string;
    public password: string;
    constructor(/*_fullName: string = "", _userName: string = "", _email: string = "", 
    _phoneNumber: string = "", _password: string = ""*/) {
        this.fullName = "";
        this.email = "";
        this.userName = "";
        this.phoneNumber = "";
        this.password = "";
    }
}
