
import { ILogin } from '../interfaces/ILogin';

import allIsSafeApi from '../api/AllIsSafeApi';
//const  getLoginKey:string[] =['post-login']
//const queryClient = useQueryClient();

export const postLogin = async (newUser: ILogin) =>{
   return await allIsSafeApi.post<any>('/auth',{"username":newUser.username,'password':newUser.password}).then(response =>{
    localStorage.setItem('token',response.data);
    console.log(response.data);
    location.reload();
      return response.data
    })   
}

// // Mutation function
// const loginUser = async (newUser: any): Promise<any> => {
//   const response = await allIsSafeApi.post<any>('/auth', {"username":newUser.email,'password':newUser.password});
//   return response.data;
// };

// // Usage in useMutation
// export const useLoginMutation = () => {
//  return useMutation({mutationFn: loginUser,
  
//   onError: (error:any) => {
//     console.error(error);
//   },
//   onSuccess: (data:any) => {
//     console.log(data);
//   },
//  })
// }

// export const getLogin = useMutation<ILogin, Error>(loginUser,{
//   onSuccess: (data:any) => {
//     console.log("flabio")
//     console.log('Login successful', data);
//    // queryClient.invalidateQueries({queryKey: getLoginKey});
//   },
//   onError: (error:any) => {
//     console.error('Login failed', error);
//   },
// });
// export const postLogin = useMutation(
//     axios.post('', newUser),
//     {
//       onSuccess: () => {
//         // Invalidate and refetch any queries that might be affected by this mutation
//         queryClient.invalidateQueries({queryKey: getLoginKey});
//       },
//     }
//   )
  
//  return useQuery({
//     queryKey: getLoginKey,
//     queryFn:async (): Promise<ILogin> => {
 
//       const response = await fetch('http://localhost:8080/rol');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const{data} =await response.json();
//       return data
//     }
//   })

