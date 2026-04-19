export class Course {
    courseId:number;
    courseName:string;
    courseFees:number;
    constructor(courseId:number,courseName:string,courseFees:number){
        this.courseId =courseId;
        this.courseName =courseName;
        this.courseFees= courseFees;
    }
}
