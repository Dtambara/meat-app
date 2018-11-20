import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

  public items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  getTotal(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value ,0);
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((cItem) => cItem.menuItem.id === item.id);
    if(foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
