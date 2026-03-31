import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-handling',
  imports: [CommonModule],
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling {
  count:number=0;
  incrementCount(event:any){
    this.count +=1;
    console.log(event);
    console.log('value on button ' + event.target.value);
  }
  bgColor:string= 'white';
  changeBackground(){
    this.bgColor = 'pink';
  }
}
