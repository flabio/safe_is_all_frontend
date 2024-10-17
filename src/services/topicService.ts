import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryAddTopic,
         QueryDeteleTopicById, 
         QueryeditTopicById, 
         QueryTodosTopic, 
         QueryTodosTopicWithCourse} from "../queries";
import { ITopic } from "../interfaces";
import { ToastAlert } from "../AllisSafe/helpers";


const keys={
    queryKeyTopic: ['topic'],
    queryKeyTopicWithCourse: ['topicWithCourse'],
    queryKeyEditTopicBydId: ['editTopicById', { id: Number }],
    queryKeyDeleteTopicById: ['deleteTopicById', { id: Number }],
    queryKeyAddTopic: ['addTopic'],
 };
 export const queriesTodosTopics=() => {
    return useQuery({
        queryKey: keys.queryKeyTopic,
        queryFn: QueryTodosTopic,
    })
 }
 export const queriesTodosTopicsBydCourseById=(id:number) => {
    return useQuery({
        queryKey: [keys.queryKeyTopicWithCourse,id],
        queryFn:()=> QueryTodosTopicWithCourse(id),
    })
 }
export const AddTopic=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (topic: ITopic) => QueryAddTopic(topic),
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({queryKey: keys.queryKeyTopic});
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const EditTopic=() => {
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (topic: ITopic) => QueryeditTopicById(topic),
      
        onSuccess: (data: any) => {
            ToastAlert.fire({
                icon: data?.status === 400 ? "info" : "success",
                title: data?.data?.message
            });
        },
        onSettled: async () => {

           await queryClient.invalidateQueries({
            queryKey: [keys.queryKeyTopic,keys.queryKeyEditTopicBydId[0]],
            exact:true
        });
     
        },
        onError: (err: any) => {
            ToastAlert.fire({
                icon: "error",
                title: err.message
            });
        },
    })
}

export const DeleteTopic=() => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => QueryDeteleTopicById(id),
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
                queryKey: [keys.queryKeyTopic,keys.queryKeyDeleteTopicById[0]],
                exact: true
            })
        }
    });
}