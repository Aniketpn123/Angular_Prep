import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../reverse-pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-attribute-ex',
  imports: [NgClass,FormsModule,ReversePipe,DatePipe,UpperCasePipe],
  templateUrl: './attribute-ex.html',
  styleUrl: './attribute-ex.css',
})
export class AttributeEx {
    isChanged = false;
    name:string ="aniket";

    birthDay= new Date();

    msg:string ="hii";
    styleChange(){
      this.isChanged = !this.isChanged;
    }
}
