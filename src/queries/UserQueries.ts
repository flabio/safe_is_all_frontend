import allIsSafeApi from "../api/AllIsSafeApi"
import {ApiUserResponse,  } from "../interfaces"
import { IUser, IUserRequest } from "../interfaces/IUser"


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
  
export  const QueryAddUser = async (data: IUserRequest) =>  await allIsSafeApi.post(`/user`, { ...data })
  

export  const QueryeditUserById = async (data: IUser) => await allIsSafeApi.put(`/user/${data.id}`, { ...data })
  

export  const QueryDeteleUserById = async (id: number) =>  await allIsSafeApi.delete<any>(`/user/${id}`)
  