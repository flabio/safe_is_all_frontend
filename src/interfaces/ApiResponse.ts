import { ICity } from "./ICity";
import { ICourse } from "./ICourse";

import { IStates } from "./IStates";


export interface ApiResponse {
    data: ICity[];
  }
  export interface ApiStatesResponse {
    data: IStates[];
  }

  export interface ApiCourseResponse {
    data: ICourse[];
  }