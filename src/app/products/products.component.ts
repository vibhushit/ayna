import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;

  constructor(){
    this.products = [
      {productId :"1",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"2",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"3",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"4",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"5",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"6",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"7",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"8",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
      {productId :"9",imgPath : "/assets/images/product.jpg", productName : "Product Name" },
    ];
  }

  ngOnInit(): void {
    
  }
}
