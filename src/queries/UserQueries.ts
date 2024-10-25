import allIsSafeApi, { allIsSafeFormDataApi } from "../api/AllIsSafeApi"
import {ApiUserResponse,  } from "../interfaces"



export const QueryTodosUsers = async (page:number) => {
    const response: ApiUserResponse = await (await allIsSafeApi.get<any>('/user/?page='+page)).data

   return (response)
  }
  export const QueryTodosStudents = async (page:number) => {
    const response: ApiUserResponse = await (await allIsSafeApi.get<any>('/user/students/?page='+page)).data

   return (response)
  }
  export const QueryTodosInstructor = async (page:number) => {
    const response: ApiUserResponse = await (await allIsSafeApi.get<any>('/user/instructor/?page='+page)).data
    return (response)
  }
  
export  const QueryAddUser = async (data: FormData) =>  await allIsSafeFormDataApi.post(`/user`, data)
  

export  const QueryeditUserById = async (id:number,data: FormData) => await allIsSafeFormDataApi.put(`/user/${id}`, data )
  

export  const QueryDeteleUserById = async (id: number) =>  await allIsSafeApi.delete<any>(`/user/${id}`)
  