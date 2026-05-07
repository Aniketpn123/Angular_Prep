import { Component, signal } from '@angular/core';
import { InterploationBinding } from './interploation-binding/interploation-binding';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';
@Component({
  selector: 'app-root',
  imports: [InterploationBinding ,PropertyBinding,EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bindings');
}
