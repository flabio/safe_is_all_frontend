export interface IModule{
    id: number;
    name: string;
    order: number;
    active: boolean;
}
export interface IModuleRole{
    id: number;
    role_id: number;
    module_id: number;
    active: boolean;
}