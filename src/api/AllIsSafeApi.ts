import axios, { AxiosInstance } from 'axios';





// const allIsSafeApi = axios.create({
//     baseURL: "http://localhost:8080"
// });

// // Todo: configurar interceptores
// allIsSafeApi.interceptors.request.use( config => {


//     return config;
// })
const allIsSafeApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json',
       'Authorization':  localStorage.getItem('token')&&` Bearer ${localStorage.getItem('token')}}` ,
    },
});

export default allIsSafeApi;