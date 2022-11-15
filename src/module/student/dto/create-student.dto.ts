export class CreateStudentDto {
    studentname : string;
    age : number;
    email : string;
    coursename : string;
    fees:number;
    duration:number;
}

export class UpdateStudentDto {
    name : string;
    age : number;
    email : string;
}