import allIsSafeApi from "../api/AllIsSafeApi"
import { ApiResponses, DataResponse, ITopic } from "../interfaces"


export const QueryTodosTopic = async () => {
    const response: ApiResponses<DataResponse<ITopic>> = await (await allIsSafeApi.get<any>('/topic')).data
   return (response).data
  }
  export const QueryTodosTopicWithCourse = async (id:number) => {
    const response: ApiResponses<DataResponse<ITopic>> = await (await allIsSafeApi.get<any>( `/topic/course/${id}`)).data
   return (response).data
  }
  
export  const QueryAddTopic = async (data: ITopic) =>  await allIsSafeApi.post(`/topic`, { ...data })
  

export  const QueryeditTopicById = async (data: ITopic) => await allIsSafeApi.put(`/topic/${data.id}`, { ...data })
  

export  const QueryDeteleTopicById = async (id: number) =>  await allIsSafeApi.delete<any>(`/topic/${id}`)
  