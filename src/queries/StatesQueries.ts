import allIsSafeApi from "../api/AllIsSafeApi"
import { ApiResponse, ApiStatesResponse, IStates } from "../interfaces"


export const QueryTodosStates = async () => {
    const response: ApiStatesResponse = await (await allIsSafeApi.get<any>('/states')).data
    return (response).data
  }
export  const QueryAddState = async (state: IStates) =>  await allIsSafeApi.post(`/states`, { ...state })
  

export  const QueryeditStateById = async (state: IStates) => await allIsSafeApi.put(`/states/${state.id}`, { ...state })
  

export  const QueryDeteleStateById = async (id: number) =>  await allIsSafeApi.delete<any>(`/states/${id}`)
  