export class Course{
      protected title = 'Angular demo';
  courseId: number;
  courseName:string;
  startDate:Date;  // yyyy-mm-dd
  courseFees: number;
  jobAssistance:boolean;

  constructor(courseId: number,courseName:string,startDate:Date,courseFees: number,jobAssistance:boolean){
     this.courseId= courseId;
     this.courseName=courseName;
     this.startDate= startDate;
     this.courseFees=courseFees;
     this.jobAssistance=jobAssistance;
  }
}
