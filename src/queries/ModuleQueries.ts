import allIsSafeApi from "../api/AllIsSafeApi"
import {ApiResponses, DataResponse, IModule, IModuleRole  } from "../interfaces"

export const QueryTodosModules = async () => {
    const response: ApiResponses<DataResponse<IModule>> = await (await allIsSafeApi.get('/module')).data
    return (response)
  }
export  const QueryAddModule = async (data: IModule) =>  await allIsSafeApi.post(`/module`, { ...data })
export  const QueryeditModuleById = async (data: IModule) => await allIsSafeApi.put(`/module/${data.id}`, { ...data })
export  const QueryDeteleModuleById = async (id: number) =>  await allIsSafeApi.delete(`/module/${id}`)
//module with role
export  const QueryAddModuleRole = async (data: IModuleRole) =>  await allIsSafeApi.post(`/module/role`, { ...data })
export  const QueryDeteleModuleRoleById = async (id: number) =>  await allIsSafeApi.delete(`/module/role/${id}`)