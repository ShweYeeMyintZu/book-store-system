import { Component } from '@angular/core';
import {CartService} from "./service/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route-app';

  constructor(public cartService:CartService) {
  }
}
