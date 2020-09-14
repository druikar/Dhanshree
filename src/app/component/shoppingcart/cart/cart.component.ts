import { Component, OnInit } from '@angular/core';
import { MessengerService } from'src/app/messenger.service'
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems = [
 // { id: 1, productId: 1,productName:'Test 1', qty: 4, price:100 },
 // {id:2,productId: 3,productName:'Test 3', qty:4,price:100},
 // {id:3,productId: 4, productName:'Test 1',qty:4,price:100},
 // {id:1,productId: 2, productName:'Test 1',qty:4,price:100},
];

cartTotal=0
  constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product:Product)=>{
     this.addproductTocart(product)
    })
  }
addproductTocart(product:Product){

  let productexist=false
  for(let i in this.cartItems){
    if(this.cartItems[i].productId === product.id){
      this,this.cartItems[i].qty++
      productexist= true;
      break;
    }
  }
  if(!productexist){
    this.cartItems.push ({
      productId:product.id,
      productName:product.name,
      qty:1,
      price:product.price
    })

  }

  
 this.cartTotal=0
 this.cartItems.forEach(item =>{
 this.cartTotal+=(item.qty*item.price)
 })

}
}
