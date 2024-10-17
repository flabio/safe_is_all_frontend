
import Swal from 'sweetalert2';
import allIsSafeApi from '../api/AllIsSafeApi';
import {IRol} from '../interfaces/IRol'
import { ToastAlert } from '../AllisSafe/helpers';






 export const queryRoles=async ()=> await allIsSafeApi.get<IRol[]>('/rol')
 

export const createNew = async (dataRol: IRol) =>{
  return await allIsSafeApi.post<any>('/rol',{...dataRol}).then(response =>{
    ToastAlert.fire({
      icon: response?.status === 400 ? "info" : "success",
      title: response?.data?.message
    });
      return response.data
   }).catch(error=>{
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
      });
     return null;
   });
}

export const editRol = async (dataRol: IRol) =>{
  return await allIsSafeApi.put<any>(`/rol/${dataRol.id}`,{...dataRol}).then(response =>{
    ToastAlert.fire({
      icon: response?.status === 400 ? "info" : "success",
      title: response?.data?.message
    });  
    return response.data
   }).catch(error=>{
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
      });
     return null;
   });
}


export const deteleRolById=async (id:number)=>{
  return await allIsSafeApi.delete<any>(`/rol/${id}`).then(response=>{
    ToastAlert.fire({
      icon: response?.data?.status === 400 ? "info" : "success",
      title: response?.data?.message
    });
  }
).catch(err=>{
  ToastAlert.fire({
    icon:"error",
    title: err.message
  });
})
}