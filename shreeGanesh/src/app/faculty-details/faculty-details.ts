import { Component } from '@angular/core';
import{Faculty} from '../models/faculty';
@Component({
  selector: 'app-faculty-details',
  imports: [],
  templateUrl: './faculty-details.html',
  styleUrl: './faculty-details.css',
})
export class FacultyDetails {
      faculty1:Faculty = {
        facultyId:101,
        facultyName:'aniket',
        skill :'angular'
      };
       
}
