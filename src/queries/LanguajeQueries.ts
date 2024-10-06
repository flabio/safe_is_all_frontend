import allIsSafeApi from "../api/AllIsSafeApi"
import {  ApiResponses, ILanguage, DataResponse } from "../interfaces"


export const QueryTodosLanguages = async (page:number) => {
    const response: ApiResponses<DataResponse<ILanguage>> = await (await allIsSafeApi.get<any>('/language/?page='+page))
    return response.data
  }
export  const QueryAddLanguage = async (state: ILanguage) =>  await allIsSafeApi.post(`/language`, { ...state })
  

export  const QueryeditLanguajeById = async (state: ILanguage) => await allIsSafeApi.put(`/language/${state.id}`, { ...state })
  

export  const QueryDeteleLanguajeById = async (id: number) =>  await allIsSafeApi.delete<any>(`/language/${id}`)
  