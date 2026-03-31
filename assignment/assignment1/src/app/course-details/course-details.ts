import { Component } from '@angular/core';
import { Course } from '../models/course';
@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
    courses:Course [] =[];
    course1:Course = new Course(101,"angualr",20000);
    course2:Course = new Course(1012,"react",25000);
    
    constructor(){
      this.courses.push(this.course1);
      this.courses.push(this.course2);
    }
}
