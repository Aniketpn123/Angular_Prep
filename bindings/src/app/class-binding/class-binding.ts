import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css',
})
export class ClassBinding {
isActive = true;
classNames= 'primary bold large';
hasError = false;
isSuccess = true;
selected = 'about';
name='';
}
