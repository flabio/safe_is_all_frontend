import { ICity } from "./ICity";
import { ICourse } from "./ICourse";
import { ILanguage } from "./ILanguaje";
import { IRol } from "./IRol";
import { ISchool } from "./ISchool";

import { IStates } from "./IStates";
import { IUser } from "./IUser";


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
    data: IUser[];
  }
  export interface ApiRolResponse {
    data: IRol[];
  }
  export interface ApiResponses<T>{
    data:T[];
  }