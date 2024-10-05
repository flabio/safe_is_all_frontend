import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { IStates } from "../interfaces"
import { ToastAlert } from "../AllisSafe/helpers"
import { QueryAddState, QueryDeteleStateById, QueryeditStateById, QueryTodosStates } from "../queries"

//react query
const keys = {
    queryKeyStates: ['queryKeyStates'],
    queryKeyEditStateById: ['editStateById', { id: Number }],
    queryKeyDeleteStateById: ['deleteStateById', { id: Number }],
    queryKeyAddState: ['addState'],
}

export const useStates = () => {
    return useQuery({
        queryKey: keys.queryKeyStates,
        queryFn: QueryTodosStates,
    });
}


export const useAddState = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (state: IStates) => QueryAddState(state),
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
                queryKey: keys.queryKeyStates
            })
        },

    });
}

export const useEditStateBydId = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (state: IStates) => QueryeditStateById(state),
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
            queryClient.invalidateQueries({
                queryKey: keys.queryKeyStates
            })
        },

    });
}


export const useDeleteStateById = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleStateById(id),
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
        onSuccess: (data: any,variables:any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message +" "+variables
            });
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: keys.queryKeyStates
            })
        }
    });
}