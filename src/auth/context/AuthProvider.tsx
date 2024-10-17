import {  useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
    logged: false,
};

export const AuthProvider =({children}:any)=>{
   const[authState,dispatch]= useReducer(authReducer,initialState);
    const login=(name='')=>{
        const action={
            type:types.login,
            payload:name,
        }
        dispatch(action);
    }
    return (
        <AuthContext.Provider value={{
...authState,
            login:login
        

        }}>
            {children}
        </AuthContext.Provider>
    )
}