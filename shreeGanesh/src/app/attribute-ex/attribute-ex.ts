import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../reverse-pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-attribute-ex',
  imports: [NgClass,FormsModule,ReversePipe,DatePipe,UpperCasePipe,CurrencyPipe,JsonPipe],
  templateUrl: './attribute-ex.html',
  styleUrl: './attribute-ex.css',
})
export class AttributeEx {
    isChanged = false;
    name:string ="aniket";

    birthDay= new Date();
    person = {name:'aniekt',age:12} ;
    msg:string ="hii";
    styleChange(){
      this.isChanged = !this.isChanged;
    }
}
