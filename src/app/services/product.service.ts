import { Injectable } from '@angular/core';


import { Product } from 'src/app/model/product';





@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[

  new Product(1,'product 1','This is the description',2500),
  new Product(2,'product 1','This is the description',3000),
  new Product(3,'product 1','This is the description',4000),
  new Product(4,'product 1','This is the description',3500),
  new Product(5,'product 1','This is the description',2500),
  new Product(6,'product 1','This is the description',1500),
  new Product(7,'product 1','This is the description',1220),
  ]

  constructor() { }

  getProducts(): Product[] {
    
    return this.products
  }
}
