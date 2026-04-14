import { Component } from '@angular/core';
import { Child } from '../child/child';
@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
 parentMsg :string= "hello from parent";

 itemList:string[] =['pen','eraseer'];

 addNewItem(value:string){
  this.itemList.push(value);
 }
}
