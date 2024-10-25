export interface IUser {
    id:number;
    imagen:string;
    firstName:string;
    lastName:string;
    email:string;
    address:string;
    phone:string;
    zipCode:string;
    stateId:number;
    stateName:string;
    rolId:number;
    rolName:string;
    isActive:boolean;
}

export interface IUserRequest {
    state_name: string;
    rol_name: string;
    id:number;

    avatar:string;
    first_name:string;
    first_sur_name:string;
    secon_sur_name:string;
    email:string;
    address:string;
    phone:string;
    zip_code:string;
    state_id:number;
    rol_id:number;
    password:string;
    active:boolean;
}