
import Swal from 'sweetalert2';
import allIsSafeApi from '../api/AllIsSafeApi';

import { ToastAlert } from '../AllisSafe/helpers';
import { ISchool } from '../interfaces';


export const querySchools = async () => await allIsSafeApi.get<ISchool[]>('/school')


export const createSchool = async (school: ISchool) => {
    return await allIsSafeApi.post<any>('/school', { ...school }).then(response => {
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

export const editSchool = async (school: ISchool) => {
    return await allIsSafeApi.put<any>(`/school/${school.id}`, { ...school }).then(response => {
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


export const deteleSchoolById = async (id: number) => {
    return await allIsSafeApi.delete<any>(`/school/${id}`).then(response => {
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