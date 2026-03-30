import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { User } from '../models/user';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
     user1:User = new User('aniekt','admin123','admin');
     user2:User = new User('guets','admin12345','guest');
     user3:User = new User('pepole','admin123456','pepole');
}
