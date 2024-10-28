import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { QueryAddLanguage, QueryDeleteLanguajeById, QueryeditLanguajeById, QueryTodosLanguages } from "../queries";
import { ILanguage } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";

const keys={
    queryKeyLanguages: ['languages'],
    queryKeyAddLanguage: ['addLanguage'],
    queryKeyEditLanguage: ['editLanguage'],
 };

export const useQueryLanguages =(page:number)=>{
    return useQuery({
        queryKey: [page,keys.queryKeyLanguages],
        queryFn:()=>QueryTodosLanguages(page),
    });
}

export const useQueryAddLanguage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: ILanguage) => QueryAddLanguage(data),
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({
                queryKey:[ keys.queryKeyLanguages,keys.queryKeyAddLanguage]
            })
        },

    });
}

export const useQueryEditLanguage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: ILanguage) => QueryeditLanguajeById(data),
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
        onSuccess:async (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
            await queryClient.invalidateQueries({
                queryKey:[ keys.queryKeyLanguages,keys.queryKeyEditLanguage]
            })
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({
                queryKey:[ keys.queryKeyLanguages,keys.queryKeyEditLanguage]
            })
        },
    });
}

export const useQueryDeleteLanguage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeleteLanguajeById(id),
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
        onSuccess:async (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
            await queryClient.invalidateQueries({
                queryKey:[ keys.queryKeyLanguages,keys.queryKeyEditLanguage]
            })
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({
                queryKey:[ keys.queryKeyLanguages,keys.queryKeyEditLanguage]
            })
        },
    });
}
