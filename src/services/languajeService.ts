import { useQuery } from "@tanstack/react-query"
import { QueryTodosLanguages } from "../queries";

const keys={
    queryKeyLanguages: ['languages'],
 };



export const useQueryLanguages =(page:number)=>{
    return useQuery({
        queryKey: [page,keys.queryKeyLanguages],
        queryFn:()=>QueryTodosLanguages(page),
    });
}