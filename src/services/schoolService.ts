
import Swal from 'sweetalert2';
import allIsSafeApi, { allIsSafeFormDataApi } from '../api/AllIsSafeApi';

import { ToastAlert } from '../AllisSafe/helpers';
import { ISchool } from '../interfaces';
import { QueryAddSchool, QueryDeteleSchoolById, QueryeditSchoolById, QueryTodosSchool } from '../queries/';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


export const queriesTodosSchools = async () => await allIsSafeApi.get<ISchool[]>('/school')


export const createSchool = async (school: any) => {
    return await allIsSafeFormDataApi.post<any>('/school', school ).then(response => {
        ToastAlert.fire({
            icon: response?.status === 400 ? "info" : "success",
            title: response?.data?.message
        });
        return response.data
    }).catch(error => {
        Swal.fire({
            title: "Error",
            text: error,
            icon: "error",
        });
        return null;
    });
}

export const editSchool = async (id:number,school: any) => {
    return await allIsSafeFormDataApi.put<any>(`/school/${id}`, school ).then(response => {
        ToastAlert.fire({
            icon: response?.status === 400 ? "info" : "success",
            title: response?.data?.message
        });
        return response.data
    }).catch(error => {
        Swal.fire({
            title: "Error",
            text: error,
            icon: "error",
        });
        return null;
    });
}


export const deteleSchoolById = async (id: number) => {
    return await allIsSafeApi.delete<any>(`/school/${id}`).then(response => {
        ToastAlert.fire({
            icon: response?.data?.status === 400 ? "info" : "success",
            title: response?.data?.message
        });
    }
    ).catch(err => {
        ToastAlert.fire({
            icon: "error",
            title: err.message
        });
    })
}



const keys={
    queryKeySchool: ['schools'],
    queryKeyEditSchoolBydId: ['editSchoolById', { id: Number }],
    queryKeyDeleteSchoolById: ['deleteSchoolById', { id: Number }],
    queryKeyAddSchool: ['addSchool'],
 };

 export const QueriesTodosSchools=(page:number) => {
    return useQuery({
        queryKey: [keys.queryKeySchool,page],
        queryFn:()=> QueryTodosSchool(page),
    })
 }
export const addSchool=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (school: ISchool) => QueryAddSchool(school),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
           await queryClient.invalidateQueries({queryKey: keys.queryKeyAddSchool});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const EditSchool=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (school: ISchool) => QueryeditSchoolById(school),
      
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
           await queryClient.invalidateQueries({queryKey: keys.queryKeySchool});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const DeleteSchoolById=(page:number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleSchoolById(id),
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
                queryKey: [keys.queryKeySchool,page]
            })
        }
    });
}