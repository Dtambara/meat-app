import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    console.log(this.shoppingCartService.items.length);
    return this.shoppingCartService.items;
  }

  getTotal(): number {
    return this.shoppingCartService.getTotal();
  }

  clear() {
    this.shoppingCartService.clear();
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

}
