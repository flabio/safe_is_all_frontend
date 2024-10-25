import { ICity } from "./ICity";
import { ICourse } from "./ICourse";


import { IRol } from "./IRol";
import { ISchool } from "./ISchool";

import { IStates } from "./IStates";
import {  IUserRequest } from "./IUser";


export interface ApiResponse {
    data: ICity[];
  }
  export interface ApiStatesResponse {
    data: IStates[];
  }

  export interface ApiCourseResponse {
    data: ICourse[];
  }

  export interface ApischoolResponse {
    data: ISchool[];
  }

  export interface ApiUserResponse {
    data: IUserRequest[];
  }
  export interface ApiRolResponse {
    data: IRol[];
  }
  export interface ApiResponses<T>{
    data:T[];
  }

 export interface DataResponse<T> {
    begin: number;
    data: T[];
    pageCount: number;
    status: number;
    totalCount: number;
  }