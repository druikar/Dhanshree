import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { D1Component } from './d1/d1.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { ShoppingcartComponent } from './component/shoppingcart/shoppingcart.component';
import { FiltersComponent } from './component/shoppingcart/filters/filters.component';
import { ProductListComponent } from './component/shoppingcart/product-list/product-list.component';
import { CartComponent } from './component/shoppingcart/cart/cart.component';
import { CartItemComponent } from './component/shoppingcart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shoppingcard/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    D1Component,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingcartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
