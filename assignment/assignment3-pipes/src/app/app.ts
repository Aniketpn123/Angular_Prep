import { Component, signal } from '@angular/core';
import { SquarePipe } from './square-pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [SquarePipe,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment3');

  no = 12;
}
