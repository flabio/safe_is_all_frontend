import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {   QueryAddTypeCourse,  
     QueryDeteleTypeCourseById,
      QueryeditTypeCourseById,  
     QueryTodosTypeCourses} from "../queries";
import { ICourse, ITypeCourse } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";


const keys={
    queryKeyTypeCourse: ['TypeCourses'],
    
    queryKeyEditCourseBydId: ['editCourseById', { id: Number }],
    queryKeyDeleteCourseById: ['deleteCourseById', { id: Number }],
    queryKeyAddCourse: ['addCity'],
 };
 export const queriesTodosTypeCourses=() => {
    return useQuery({
        queryKey: keys.queryKeyTypeCourse,
        queryFn: QueryTodosTypeCourses,
    })
 }
export const AddTypeCourse=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: ITypeCourse) => QueryAddTypeCourse(course),
        onSuccess: (data:any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
           await queryClient.invalidateQueries({queryKey: keys.queryKeyTypeCourse});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}
export const EditTypeCourse=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: ICourse) => QueryeditTypeCourseById(course),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
           await queryClient.invalidateQueries({queryKey: keys.queryKeyTypeCourse});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}
export const DeleteTypeCourse=() => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleTypeCourseById(id),
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
                queryKey: keys.queryKeyTypeCourse
            })
        }
    });
}
