import { Component  } from '@angular/core';

@Component({
  selector: 'app-interploation-binding',
  imports: [],
  templateUrl: './interploation-binding.html',
  styleUrl: './interploation-binding.css',
})
export class InterploationBinding {
   name:string= "Aniket";

   displayAddress(){
    return "my city  is Pune "
   }

   obj={
    name:"ant",
    like:"sugar",
   }
   arr=[12,33];

   value= true;
}
