import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryAddCourse, QueryAddCourseSchool, QueryDeteleCourseById, QueryDeteleCourseSchoolById, QueryeditCourseById, QueryTodosCourses, QueryTodosCourseSchool } from "../queries";
import { ICourse, ICourseSchool } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";


const keys={
    queryKeyCourse: ['courses'],
    queryKeyCourseSchool: ['coursesSchool'],
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

 export const queriesTodosCoursesSchool=() => {
    return useQuery({
        queryKey: keys.queryKeyCourseSchool,
        queryFn: QueryTodosCourseSchool,
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

// course with school

export const AddCourseSchool=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (course: ICourseSchool) => QueryAddCourseSchool(course),
      
        onSuccess:async (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
            
           await queryClient.invalidateQueries({queryKey: keys.queryKeyCourseSchool});
     
        },
        onSettled: async () => {

           await queryClient.invalidateQueries({queryKey: keys.queryKeyCourseSchool});
     
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const DeleteCourseSchool=() => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleCourseSchoolById(id),
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
                queryKey: keys.queryKeyCourseSchool
            })
        }
    });
}