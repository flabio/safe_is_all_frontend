import allIsSafeApi from "../api/AllIsSafeApi"
import { ApiResponses, ICourse, DataResponse, ICourseSchool } from "../interfaces"


export const QueryTodosCourses = async () => {
    const response: ApiResponses<DataResponse<ICourse>> = await (await allIsSafeApi.get('/course')).data
   return (response).data
  }

export  const QueryAddCourse = async (data: ICourse) =>  await allIsSafeApi.post(`/course`, { ...data })
  

export  const QueryeditCourseById = async (data: ICourse) => await allIsSafeApi.put(`/course/${data.id}`, { ...data })
  

export  const QueryDeteleCourseById = async (id: number) =>  await allIsSafeApi.delete(`/course/${id}`)



export const QueryTodosCourseSchool = async () => {
  const response: ApiResponses<DataResponse<ICourse>> = await (await allIsSafeApi.get('/course/school')).data
 return (response).data
}

export  const QueryAddCourseSchool = async (data: ICourseSchool) =>  await allIsSafeApi.post(`/course/school`, { ...data })
  
export  const QueryDeteleCourseSchoolById = async (id: number) =>  await allIsSafeApi.delete(`/course/school/${id}`)
