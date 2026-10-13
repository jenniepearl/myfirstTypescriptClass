export interface userInterface{
    firstName:string;
    lastName:string;
    age:any;
    role:string;
}

export interface Admin extends userInterface{
    adminType:string;
    adminLocation:string;
}