import { Component } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent {
constructor(public cartService:CartService) {

}

  removeFromCart(id:any) {
    this.cartService.remove(parseInt(id));
  }
}
