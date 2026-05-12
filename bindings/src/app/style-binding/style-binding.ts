import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  imports: [CommonModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css',
})
export class StyleBinding {
    textColor= 'blue';
    fontSize='24px';
}
