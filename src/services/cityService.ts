
import Swal from 'sweetalert2';
import allIsSafeApi from '../api/AllIsSafeApi';
import { ToastAlert } from '../AllisSafe/helpers';
import { ApiResponse, ICity } from '../interfaces';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const queryCities = async () => {
  const response: ApiResponse = await (await allIsSafeApi.get<any>('/cities')).data
  return (response).data
}

export const createCity = async (data: ICity) => {
  return await allIsSafeApi.post<any>('/cities', { ...data }).then(response => {

    ToastAlert.fire({
      icon: response?.status === 400 ? "info" : "success",
      title: response?.data?.message
    });
    return response.data
  }).catch(error => {
    Swal.fire({
      title: "Error",
      text: error,
      icon: "error",
    });
    return null;
  });
}

export const editCity = async (data: ICity) => {
  return await allIsSafeApi.put<any>(`/cities/${data.id}`, { ...data }).then(response => {
    ToastAlert.fire({
      icon: response?.status === 400 ? "info" : "success",
      title: response?.data?.message
    });
    return response.data
  }).catch(error => {
    Swal.fire({
      title: "Error",
      text: error,
      icon: "error",
    });
    return null;
  });
}

export const deteleCityById = async (id: number) => {
  return await allIsSafeApi.delete<any>(`/cities/${id}`).then(response => {
    ToastAlert.fire({
      icon: response?.data?.status === 400 ? "info" : "success",
      title: response?.data?.message
    });
  }
  ).catch(err => {
    ToastAlert.fire({
      icon: "error",
      title: err.message
    });
  })
}

//react query
const keys = {
  queryKeyCities: ['queryKeyCities']
}
const getTodoCities = async () => {
  const response: ApiResponse = await (await allIsSafeApi.get<any>('/cities')).data
  return (response).data

}

export const useCities = () => {
  return useQuery({
    queryKey: keys.queryKeyCities,
    queryFn: getTodoCities,
  });
}
const addCity = async (city: ICity) => {
  return await allIsSafeApi.post(`/cities`, { ...city })
}
const AddCityData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (city: ICity) => addCity(city),
    onError: (err: any) => {
      ToastAlert.fire({
        icon: "error",
        title: err.message
      });
    },
    onSuccess: (data: any) => {
      console.log("success",data)
      ToastAlert.fire({
        icon: data?.status === 400 ? "info" : "success",
        title: data?.data?.message
      });
    },
    onSettled:async() => {

    await  queryClient.invalidateQueries({
        queryKey: keys.queryKeyCities
      })
    },

  });
}

const queryeditCityBydId = async (city: ICity) => {
  return await allIsSafeApi.put(`/cities/${city.id}`, { ...city })
}
const useEditCityBydId = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (city: ICity) => queryeditCityBydId(city),
    onError: (err: any) => {
      ToastAlert.fire({
        icon: "error",
        title: err.message
      });
    },
    onSuccess: (data: any) => {
      ToastAlert.fire({
        icon: data?.status === 400 ? "info" : "success",
        title: data?.data?.message
      });
      queryClient.invalidateQueries({
        queryKey: keys.queryKeyCities
      })
    },

  });
}

const queryDeteleCityById = async (id: number) => {
  return await allIsSafeApi.delete<any>(`/cities/${id}`)
}
const useDeleteCityById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => queryDeteleCityById(id),
    onError: (err: any) => {
      ToastAlert.fire({
        icon: "error",
        title: err.message
      });
    },
    onSuccess: () => {
      console.log("success")
      // ToastAlert.fire({
      //   icon: data?.status === 400 ? "info" : "success",
      //   title: data?.data?.message
      // });
      // queryClient.invalidateQueries({
      //   queryKey: keys.queryKeyCities
      // })
    },
    onSettled:(data) => {
      ToastAlert.fire({
        icon: data?.status === 400 ? "info" : "success",
        title: data?.data?.message
      });
      queryClient.invalidateQueries({
        queryKey: keys.queryKeyCities
      })
    }

  });
}

export { AddCityData, useDeleteCityById,useEditCityBydId };