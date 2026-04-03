import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInfo } from './user-info/user-info';
import { Course } from './models/course';
import { FacultyDetails } from './faculty-details/faculty-details';
import { EventHandling } from './event-handling/event-handling';
import { AttributeEx } from './attribute-ex/attribute-ex';
@Component({
  selector: 'app-root',
  imports: [CommonModule,UserInfo,FacultyDetails,EventHandling,AttributeEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('shreeGanesh');
  protected title = 'Angular demo';
  courseId: number =101;
  courseName:string ='angular';
  startDate:Date = new Date('2026-03-25');  // yyyy-mm-dd
  courseFees: number = 20000;
  jobAssistance:boolean=true;

  course1:Course= new Course(102,'Angular',new Date("2026-04-10"),3000,true);
  course2:Course= new Course(103,'Angular',new Date("2026-04-10"),3000,true);
  course3:Course= new Course(104,'Angular',new Date("2026-04-10"),3000,true);

  courses: Course[] = [];

  constructor(){
    this.courses.push(this.course2);
    this.courses.push(this.course3);
  }

  imgUrl = "img.gif";
}
