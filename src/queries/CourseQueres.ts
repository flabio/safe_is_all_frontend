import allIsSafeApi from "../api/AllIsSafeApi"
import { ApiResponses, ICourse, DataResponse } from "../interfaces"


export const QueryTodosCourses = async () => {
    const response: ApiResponses<DataResponse<ICourse>> = await (await allIsSafeApi.get<any>('/course')).data
   return (response).data
  }
export  const QueryAddCourse = async (data: ICourse) =>  await allIsSafeApi.post(`/course`, { ...data })
  

export  const QueryeditCourseById = async (data: ICourse) => await allIsSafeApi.put(`/course/${data.id}`, { ...data })
  

export  const QueryDeteleCourseById = async (id: number) =>  await allIsSafeApi.delete<any>(`/course/${id}`)
  