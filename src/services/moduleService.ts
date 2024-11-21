import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryAddModule, QueryAddModuleRole, QueryDeteleModuleById, QueryDeteleModuleRoleById, QueryeditModuleById, QueryTodosModules } from "../queries";
import { IModule, IModuleRole } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";

const keys={
    queryKeyModules: ['modules'],
    queryKeyEditModuleById: ['editModuleById', { id: Number }],
    queryKeyDeleteModuleById: ['deleteModuleById', { id: Number }],
    queryKeyAddModule: ['addModule'],
}

export const useQueryModules = () => {
    return useQuery({
        queryKey: [keys.queryKeyModules],
        queryFn:()=> QueryTodosModules(),
    });
}
export const useQueryAddModule=()=>{
    const queryClient=useQueryClient();
    return useMutation({
        mutationFn: (module: IModule) => QueryAddModule(module),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: "success",
                title: data?.data?.message 
            });
            queryClient.invalidateQueries({queryKey:keys.queryKeyModules});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    });
}
export const useQueryEditModule=() => {
    const queryClient=useQueryClient();
    return useMutation({
        mutationFn: (module: IModule) => QueryeditModuleById(module),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: "success",
                title: data?.data?.message 
            });
            queryClient.invalidateQueries({queryKey:keys.queryKeyModules});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    });
}
export const useQueryDeleteModule=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleModuleById(id),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: "success",
                title: data?.data?.message 
            });
            queryClient.invalidateQueries({ queryKey: [keys.queryKeyModules] });

        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const useQueryAddModuleRole=()=>{
    const queryClient=useQueryClient();
    return useMutation({
        mutationFn: (module: IModuleRole) => QueryAddModuleRole(module),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: "success",
                title: data?.data?.message 
            });
        },
        onSettled:() => {
            queryClient.invalidateQueries({ queryKey: [keys.queryKeyModules] });
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    });
}
export const useQueryDeleteModuleRole=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleModuleRoleById(id),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: "success",
                title: data?.data?.message 
            });
            queryClient.invalidateQueries({ queryKey: [keys.queryKeyModules] });
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}