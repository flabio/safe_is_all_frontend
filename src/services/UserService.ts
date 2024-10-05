import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  QueryAddUser,  QueryDeteleUserById,  QueryeditUserById,  QueryTodosInstructor,  QueryTodosStudents,  QueryTodosUsers } from "../queries";
import {  IUser, IUserRequest } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";


const keys={
    queryKeyUser: ['user'],
    queryKeyStudent: ['student'],
    queryKeyInstructor: ['instructor'],
    queryKeyEditUserBydId: ['editUserById', { id: Number }],
    queryKeyDeleteUserById: ['deleteUserById', { id: Number }],
    queryKeyAddUser: ['addUser'],
 };
 export const queriesTodosUser=(page:number) => {
   
    return useQuery({
        queryKey: [keys.queryKeyUser, page],  // Agregamos la página a la clave
        queryFn: () => QueryTodosUsers(page), // Función de consulta
   
    });
 }

 export const queriesTodosStudents=(page:number) => {
   
    return useQuery({
        queryKey: [keys.queryKeyStudent, page],  // Agregamos la página a la clave
        queryFn: () => QueryTodosStudents(page), // Función de consulta
   
    });
 }
 export const queriesTodosInstructor=(page:number) => {
   
    return useQuery({
        queryKey: [keys.queryKeyInstructor, page],  // Agregamos la página a la clave
        queryFn: () => QueryTodosInstructor(page), // Función de consulta
   
    });
 }
 // keepPreviousData: true 
export const AddUser=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: IUserRequest) => QueryAddUser(course),
      
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {

           await queryClient.invalidateQueries({queryKey: keys.queryKeyUser});
     
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const EditUser=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: IUser) => QueryeditUserById(course),
      
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {

           await queryClient.invalidateQueries({queryKey: keys.queryKeyUser});
     
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const DeleteUser=(page:number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleUserById(id),
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
            queryClient.invalidateQueries({
                queryKey: [keys.queryKeyUser, page]
            })
        },
        onSettled: () => {
           
            queryClient.invalidateQueries({
                queryKey: keys.queryKeyUser
            })
        }
    });
}