export interface ICourse {
    id: number;
    name: string;
    active: boolean;
}


export interface ICourseSchool {
    id: number;
    course_id: number;
    school_id: number;
    active: boolean;
}