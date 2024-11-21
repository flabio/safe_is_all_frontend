export interface IModule{
    Id: number;
    name: string;
    icon?:string;
    order: number;
    active: boolean;
}
export interface IModuleRole{
    id: number;
    role_id: number;
    module_id: number;
    active: boolean;
}