import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  constructor(private ps:ProductService){}
  
  productArr:string[]=[];
  productName:string ='';

  ngOnInit(): void {
    this.productArr= this.ps.getProduct();
  }

  addNewProduct(){
    this.ps.addProduct(this.productName);
    this.productName='';

  }


   
}
