import allIsSafeApi from "../api/AllIsSafeApi"
import {  ILanguage, ApiStatesResponse } from "../interfaces"


export const QueryTodosLanguages = async (page:number) => {
    const response: ApiStatesResponse  = await (await allIsSafeApi.get('/language/?page='+page)).data
    return (response).data
  }
export  const QueryAddLanguage = async (data: ILanguage) =>  await allIsSafeApi.post(`/language`, { ...data })
  

export  const QueryeditLanguajeById = async (data: ILanguage) => await allIsSafeApi.put(`/language/${data.id}`, { ...data })
  

export  const QueryDeleteLanguajeById = async (id: number) =>  await allIsSafeApi.delete(`/language/${id}`)
  