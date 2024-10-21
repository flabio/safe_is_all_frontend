import axios, { AxiosInstance } from 'axios';





// const allIsSafeApi = axios.create({
//     baseURL: "http://localhost:8080"
// });

// // Todo: configurar interceptores
// allIsSafeApi.interceptors.request.use( config => {


//     return config;
// })
const allIsSafeApi: AxiosInstance = axios.create({
    baseURL: "http://34.207.102.227:3080",
    headers: {
        'Content-Type': 'application/json',
       'Authorization':  localStorage.getItem('token')&&` Bearer ${localStorage.getItem('token')}}` ,
    },
});


export default allIsSafeApi;

export const allIsSafeFormDataApi: AxiosInstance = axios.create({
    baseURL: "http://34.207.102.227:3080",
    headers: {
        "Content-Type": "multipart/form-data",
       'Authorization':  localStorage.getItem('token')&&` Bearer ${localStorage.getItem('token')}}` ,
    },
});

