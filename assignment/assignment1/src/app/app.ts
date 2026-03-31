import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseDetails } from './course-details/course-details';
import { LoginDetails } from './login-details/login-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseDetails,LoginDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment1');
}
