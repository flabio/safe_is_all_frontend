import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { IRol } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";
import { QueryAddRol, QueryTodosRoles, QueryDeteleRolById, QueryeditRolById } from "../queries";


const keys = {
    queryKeyRol: ['rol'],
    queryKeyEditRolBydId: ['editRolById', { id: Number }],
    queryKeyDeleteRolById: ['deleteRolById', { id: Number }],
    queryKeyAddRol: ['addRol'],
};
export const queriesTodosRol = () => {

    return useQuery({
        queryKey: [keys.queryKeyRol],  // Agregamos la página a la clave
        queryFn: () => QueryTodosRoles(), // Función de consulta

    });
}
// keepPreviousData: true 
export const AddRol = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (course: IRol) => QueryAddRol(course),

        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {

            await queryClient.invalidateQueries({ queryKey: keys.queryKeyRol });

        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const EditRol = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (course: IRol) => QueryeditRolById(course),

        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({ queryKey: keys.queryKeyRol });
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const DeleteRol = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleRolById(id),
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
        onSuccess: (data: any, variables: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message + " " + variables
            });
        },
        onSettled: () => {

            queryClient.invalidateQueries({
                queryKey: keys.queryKeyRol
            })
        }
    });
}