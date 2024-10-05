import allIsSafeApi from "../api/AllIsSafeApi"
import {ApiRolResponse, IRol  } from "../interfaces"



export const QueryTodosRoles = async () => {
    const response: ApiRolResponse = await (await allIsSafeApi.get<any>('/rol')).data

   return (response)
  }
export  const QueryAddRol = async (data: IRol) =>  await allIsSafeApi.post(`/rol`, { ...data })
  

export  const QueryeditRolById = async (data: IRol) => await allIsSafeApi.put(`/rol/${data.id}`, { ...data })
  

export  const QueryDeteleRolById = async (id: number) =>  await allIsSafeApi.delete<any>(`/rol/${id}`)
  