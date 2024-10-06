import allIsSafeApi from "../api/AllIsSafeApi"
import { ApiResponses,  DataResponse, ISchool } from "../interfaces"

export const QueryTodosSchool = async () => {
    const response:  ApiResponses<DataResponse<ISchool>> = await (await allIsSafeApi.get<any>('/school')).data
   return (response).data
  }
export  const QueryAddSchool = async (data: ISchool) =>  await allIsSafeApi.post(`/school`, { ...data })

export  const QueryeditSchoolById = async (data: ISchool) => await allIsSafeApi.put(`/school/${data.id}`, { ...data })

export  const QueryDeteleSchoolById = async (id: number) =>  await allIsSafeApi.delete<any>(`/school/${id}`)
  