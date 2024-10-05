import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryAddCourse, QueryDeteleCourseById, QueryeditCourseById, QueryTodosCourses } from "../queries";
import { ICourse } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";


const keys={
    queryKeyCourse: ['courses'],
    queryKeyEditCourseBydId: ['editCourseById', { id: Number }],
    queryKeyDeleteCourseById: ['deleteCourseById', { id: Number }],
    queryKeyAddCourse: ['addCity'],
 };
 export const queriesTodosCourses=() => {
    return useQuery({
        queryKey: keys.queryKeyCourse,
        queryFn: QueryTodosCourses,
    })
 }
export const AddCourse=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: ICourse) => QueryAddCourse(course),
      
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {

           await queryClient.invalidateQueries({queryKey: keys.queryKeyCourse});
     
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const EditCourse=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: ICourse) => QueryeditCourseById(course),
      
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {

           await queryClient.invalidateQueries({queryKey: keys.queryKeyCourse});
     
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const DeleteCourse=() => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleCourseById(id),
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
                queryKey: keys.queryKeyCourse
            })
        }
    });
}