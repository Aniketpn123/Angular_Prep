import { Component, signal, twoWayBinding } from '@angular/core';
import { InterploationBinding } from './interploation-binding/interploation-binding';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
@Component({
  selector: 'app-root',
  imports: [InterploationBinding ,PropertyBinding,EventBinding,TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bindings');
}
