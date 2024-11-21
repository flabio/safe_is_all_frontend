import allIsSafeApi from "../api/AllIsSafeApi"
import { ApiResponses, ITypeCourse, DataResponse } from "../interfaces"

export const QueryTodosTypeCourses = async () => {
    const response: ApiResponses<DataResponse<ITypeCourse>> = await (await allIsSafeApi.get('/type_course')).data
   return (response).data
  }
export  const QueryAddTypeCourse = async (data: ITypeCourse) =>  await allIsSafeApi.post(`/type_course`, { ...data })
export  const QueryeditTypeCourseById = async (data: ITypeCourse) => await allIsSafeApi.put(`/type_course/${data.id}`, { ...data })
export  const QueryDeteleTypeCourseById = async (id: number) =>  await allIsSafeApi.delete(`/type_course/${id}`)



